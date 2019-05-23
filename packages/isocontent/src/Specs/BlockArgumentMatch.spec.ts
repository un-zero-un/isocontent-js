import assert from 'assert';

import { blockArgument } from './';
import { BlockNode } from '../';
import AllMatch from './AllMatch';

describe('BlockArgumentMatch / blockArgument()', () => {
    it('match identical argument', () => {
        const specification = blockArgument('foo', 'bar');

        assert.strictEqual(specification.isSatisfiedBy(BlockNode.fromBlockType('', { foo: 'bar' })), true);
    });

    it('reject different argument', () => {
        const specification = blockArgument('foo', 'bar');

        assert.strictEqual(specification.isSatisfiedBy(BlockNode.fromBlockType('', {})), false);
        assert.strictEqual(specification.isSatisfiedBy(BlockNode.fromBlockType('', { foo: 'qux' })), false);
    });

    it('can be combined', () => {
        const specification = blockArgument('foo', 'bar');

        assert.strictEqual(specification.and(specification) instanceof AllMatch, true);
    });
});
