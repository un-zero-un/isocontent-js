import Node, { ASTElement } from '../AST/Node';
import NodeList from '../AST/NodeList';
import TextNode from '../AST/TextNode';
import BlockNode from '../AST/BlockNode';

export interface JsonTextNode {
    readonly type: 'text';
    readonly value: string;
}

export interface JsonBlockNode {
    readonly type: 'block';
    readonly block_type: string;
    readonly arguments?: {
        [key: string]: string | number | boolean;
    };
    readonly children?: JsonNodeList;
}

export type JsonNode = JsonTextNode | JsonBlockNode;
export type JsonNodeList = JsonNode[];
export type JsonInput = JsonNodeList | JsonNode;

export default class JSONParser {
    public parse(input: JsonInput): ASTElement {
        if (input instanceof Array) {
            return NodeList.fromArray(
                input.map(subNode => this.parse(subNode) as Node)
            );
        }

        switch (input.type) {
            case 'text':
                return TextNode.fromText(input.value);
            case 'block':
                return BlockNode.fromBlockType(
                    input.block_type,
                    input.arguments,
                    input.children
                        ? (this.parse(input.children) as NodeList)
                        : null
                );
        }
    }
}
