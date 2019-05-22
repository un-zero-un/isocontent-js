import Node, { ASTElement } from '../AST/Node';
import NodeList from '../AST/NodeList';
import TextNode from '../AST/TextNode';
import BlockNode from '../AST/BlockNode';

interface JsonTextNode {
    readonly type: 'text';
    readonly value: string;
}

interface JsonBlockNode {
    readonly type: 'block';
    readonly block_type: string;
    readonly arguments: {
        [key: string]: string | number | boolean;
    };
    readonly children?: JsonNodeList;
}

type JsonNode = JsonTextNode | JsonBlockNode;
type JsonNodeList = JsonNode[];
type JsonInput = JsonNodeList | JsonNode;

export default class JSONParser {
    public parse(json: string): ASTElement {
        return this.doParse(JSON.parse(json));
    }

    private doParse(input: JsonInput): ASTElement {
        if (input instanceof Array) {
            return NodeList.fromArray(
                input.map(subnode => this.doParse(subnode) as Node)
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
                        ? (this.doParse(input.children) as NodeList)
                        : null
                );
        }
    }
}
