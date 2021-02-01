import React from 'react';
import { ASTElement, blockArgument, BlockNode, blockType, JsonInput, Specification } from 'isocontent';
import Isocontent, { BlockNodeProps, TextNodeProps } from 'react-isocontent';
import { StyleSheet, Text, View, Linking } from 'react-native';

interface Props {
    content?: string | JsonInput;
    ast?: ASTElement;
    renderTextNode?: (props: TextNodeProps) => React.Element;
    renderBlockNode?: (props: BlockNodeProps) => React.Element;
    blocks?: (styles: StyleSheet) => BlockMap;
    styles?: StyleSheet;
}

type BlockMap = Array<[Specification<BlockNode>, React.Component<BlockNodeProps>]>;

export const defaultStyles = new StyleSheet.create({
    paragraph: {},
    inlineText: {},
    emphasis: {
        fontStyle: 'italic',
    },
    strong: {
        fontWeight: 'bold',
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    list: {},
    listItem: {},
    generic: {
        backgroundColor: 'red',
    },
});

const defaultBlocks: (styles: StyleSheet) => BlockMap = styles => [
    [blockType('paragraph'), ({ node, renderNode }) => <Text style={styles.paragraph}>{renderNode(node.children)}</Text>],
    [blockType('inline_text'), ({ node, renderNode }) => <Text style={styles.inlineText}>{renderNode(node.children)}</Text>],
    [blockType('emphasis'), ({ node, renderNode }) => <Text style={styles.emphasis}>{renderNode(node.children)}</Text>],
    [blockType('strong'), ({ node, renderNode }) => <Text style={styles.strong}>{renderNode(node.children)}</Text>],
    [blockType('generic'), ({ node, renderNode }) => <View style={styles.generic}>{renderNode(node.children)}</View>],
    [
        blockType('list').and(blockArgument('ordered', false)),
        ({ node, renderNode }) => <View style={styles.list}>{renderNode(node.children)}</View>,
    ],
    [
        blockType('list').and(blockArgument('ordered', true)),
        ({ node, renderNode }) => <View style={styles.list}>{renderNode(node.children)}</View>,
    ],
    [blockType('list_item'), ({ node, renderNode }) => <View style={styles.listItem}>{renderNode(node.children)}</View>],
    [
        blockType('title').and(blockArgument('level', 3)),
        ({ node, renderNode }) => <View>{renderNode(node.children)}</View>,
    ],
    [
        blockType('title').and(blockArgument('level', 4)),
        ({ node, renderNode }) => <View>{renderNode(node.children)}</View>,
    ],
    [
        blockType('title').and(blockArgument('level', 5)),
        ({ node, renderNode }) => <View>{renderNode(node.children)}</View>,
    ],
    [blockType('quote'), ({ node, renderNode }) => <View>{renderNode(node.children)}</View>],
    [blockType('new_line'), () => <View />],
    [
        blockType('link'),
        ({ node, renderNode }) => (
            <Text
                style={styles.link}
                onPress={() => {
                    Linking.openURL(node.props.href);
                }}
            >
                {renderNode(node.children)}
            </Text>
        ),
    ],
];

export default function IsocontentNative({
    renderTextNode,
    renderBlockNode,
    ast,
    content,
    blocks = defaultBlocks,
    styles = defaultStyles,
}: Props) {
    const styledBlocks = blocks(styles);

    return (
        <Isocontent
            content={content}
            ast={ast}
            renderTextNode={renderTextNode ? renderTextNode : ({ node }) => <Text>{node.value}</Text>}
            renderBlockNode={
                renderBlockNode
                    ? renderBlockNode
                    : ({ node, renderNode }) => {
                          const block = styledBlocks.filter(([spec]) => spec.isSatisfiedBy(node));

                          if (0 !== block.length) {
                              return block[0][1]({ node, renderNode });
                          }

                          return <View>{renderNode(node.children)}</View>;
                      }
            }
        />
    );
}
