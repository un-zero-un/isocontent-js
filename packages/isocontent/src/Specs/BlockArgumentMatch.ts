import BlockNode from '../AST/BlockNode';
import BaseSpecification from './BaseSpecification';

export default class BlockArgumentMatch extends BaseSpecification<BlockNode> {
    private readonly _argumentName: string;
    private readonly _argumentValue: string | boolean | number;

    constructor(argumentName: string, argumentValue: string | boolean | number) {
        super();

        this._argumentName = argumentName;
        this._argumentValue = argumentValue;
    }

    public isSatisfiedBy(candidate: BlockNode): boolean {
        return (
            candidate.props &&
            this._argumentName in candidate.props &&
            candidate.props[this._argumentName] === this._argumentValue
        );
    }
}
