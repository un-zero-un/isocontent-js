import NodeList from './NodeList';

export const TEXT_NODE = 'text';
export const BLOCK_NODE = 'block';

export default interface Node {
    readonly TYPE: string;
}

export type ASTElement = Node | NodeList;
