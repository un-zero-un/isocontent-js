import React from 'react';
import { blockType, blockArgument, ASTElement, Specification, JsonInput, BlockNode } from 'isocontent';
import Isocontent, { BlockNodeProps, TextNodeProps } from 'react-isocontent';

type BlockMap = Array<[Specification<BlockNode>, React.Component<BlockNodeProps> | string]>;

interface Props {
    content?: string | JsonInput;
    ast?: ASTElement;
    renderTextNode?: (props: TextNodeProps) => React.Element;
    renderBlockNode?: (props: BlockNodeProps) => React.Element;
    blocks?: BlockMap;
}

const defaultBlocks: BlockMap = [
    [blockType('paragraph'), 'p'],
    [blockType('inline_text'), 'span'],
    [blockType('emphasis'), 'em'],
    [blockType('strong'), 'strong'],
    [blockType('generic'), 'span'],
    [blockType('list').and(blockArgument('ordered', false)), 'ul'],
    [blockType('list').and(blockArgument('ordered', true)), 'ol'],
    [blockType('list_item'), 'li'],
    [blockType('title').and(blockArgument('level', 3)), 'h3'],
    [blockType('title').and(blockArgument('level', 4)), 'h4'],
    [blockType('title').and(blockArgument('level', 5)), 'h5'],
    [blockType('quote'), 'blockquote'],
    [blockType('new_line'), 'br'],
];

function renderBlockNodeFromBlockComponent(
    node: BlockNode,
    blockComponent: React.Component<BlockNodeProps> | string,
    renderNode: React.Component<{ node: ASTElement }>
) {
    return React.createElement(blockComponent, {}, renderNode(node.children));
}

export default function IsocontentDOM({
    content,
    ast,
    renderTextNode,
    renderBlockNode,
    blocks = defaultBlocks,
}: Props) {
    return (
        <Isocontent
            content={content}
            ast={ast}
            renderTextNode={renderTextNode ? renderTextNode : ({ node }) => node.value}
            renderBlockNode={
                renderBlockNode
                    ? renderBlockNode
                    : ({ node, renderNode }) => {
                          const block = blocks.filter(([spec]) => spec.isSatisfiedBy(node));

                          if (0 !== block.length) {
                              return renderBlockNodeFromBlockComponent(node, block[0][1], renderNode);
                          }

                          return <div>{renderNode(node.children)}</div>;
                      }
            }
        />
    );
}
