import Node, { BLOCK_NODE } from './Node';
import NodeList from './NodeList';

export type BlockNodeProps = {
    [key: string]: string | number | boolean;
};

export default class BlockNode implements Node {
    readonly TYPE = BLOCK_NODE;

    private readonly _blockType: string;
    private readonly _props: BlockNodeProps;
    private readonly _children: NodeList | null;

    private constructor(blockType, props, children = null) {
        this._blockType = blockType;
        this._props = props;
        this._children = children;
    }

    get blockType(): string {
        return this._blockType;
    }

    get props(): BlockNodeProps {
        return this._props;
    }

    get children(): NodeList | null {
        return this._children;
    }

    public static fromBlockType(
        blockType: string,
        props: BlockNodeProps = {},
        children: NodeList | null = null
    ) {
        return new BlockNode(blockType, props, children);
    }
}
