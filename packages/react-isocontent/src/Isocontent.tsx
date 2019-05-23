import { parse, BlockNode, JsonInput, NodeList, TextNode, ASTElement } from 'isocontent';
import React, {Fragment} from 'react';

export interface TextNodeProps {
    node: TextNode;
}

export interface BlockNodeProps {
    node: BlockNode;
    renderNode: (node: ASTElement) => React.Element;
}

interface Props {
    content?: string | JsonInput;
    ast?: ASTElement;
    renderTextNode: (props: TextNodeProps) => React.Element;
    renderBlockNode: (props: BlockNodeProps) => React.Element;
}

export default function Isocontent({ content, ast, renderBlockNode, renderTextNode }: Props) {
    function renderNode(node: ASTElement | null) {
        if (node instanceof NodeList) {
            return node.nodes.map((node, i) => <Fragment key={i}>{renderNode(node)}</Fragment>);
        }

        if (node instanceof BlockNode) {
            return renderBlockNode({ node, renderNode });
        }

        if (node instanceof TextNode) {
            return renderTextNode({ node });
        }

        return null;
    }

    if (content) {
        return renderNode(parse(content));
    }

    return renderNode(ast);
}
