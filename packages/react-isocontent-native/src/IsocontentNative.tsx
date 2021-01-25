import React from 'react';
import { ASTElement, blockArgument, BlockNode, blockType, JsonInput, Specification } from 'isocontent';
import Isocontent, { BlockNodeProps, TextNodeProps } from 'react-isocontent';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

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
    },
    generic: {},
});

const defaultBlocks: (styles: StyleSheet) => BlockMap = styles => [
    [blockType('paragraph'), ({ node, renderNode }) => <View styles={styles.paragraph}>{renderNode(node.children)}</View>],
    [blockType('inline_text'), ({ node, renderNode }) => <View styles={styles.inlineText}>{renderNode(node.children)}</View>],
    [blockType('emphasis'), ({ node, renderNode }) => <View styles={styles.emphasis}>{renderNode(node.children)}</View>],
    [blockType('strong'), ({ node, renderNode }) => <View styles={styles.strong}>{renderNode(node.children)}</View>],
    [blockType('generic'), ({ node, renderNode }) => <View styles={styles.generic}>{renderNode(node.children)}</View>],
    [
        blockType('list').and(blockArgument('ordered', false)),
        ({ node, renderNode }) => <View>{renderNode(node.children)}</View>,
    ],
    [
        blockType('list').and(blockArgument('ordered', true)),
        ({ node, renderNode }) => <View>{renderNode(node.children)}</View>,
    ],
    [blockType('list_item'), ({ node, renderNode }) => <View>{renderNode(node.children)}</View>],
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
            <View styles={styles.link}>
                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL(node.props.href);
                    }}
                >
                    {renderNode(node.children)}
                </TouchableOpacity>
            </View>
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
