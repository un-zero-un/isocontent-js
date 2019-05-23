import BlockNode from '../AST/BlockNode';
import BaseSpecification from './BaseSpecification';

export default class BlockTypeMatch extends BaseSpecification<BlockNode> {
    private readonly _blockType: string;

    constructor(blockType: string) {
        super();

        this._blockType = blockType;
    }

    isSatisfiedBy(candidate: BlockNode): boolean {
        return candidate.blockType === this._blockType;
    }
}
