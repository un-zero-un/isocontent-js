import assert from 'assert';

import { blockType } from './';
import { BlockNode } from '../';
import AllMatch from './AllMatch';

describe('BlockTypeMatch / blockType()', () => {
    it('match identical type', () => {
        const specification = blockType('foo');

        assert.strictEqual(specification.isSatisfiedBy(BlockNode.fromBlockType('foo')), true);
    });

    it('reject different type', () => {
        const specification = blockType('foo');

        assert.strictEqual(specification.isSatisfiedBy(BlockNode.fromBlockType('bar')), false);
    });

    it('can be combined', () => {
        const specification = blockType('foo');

        assert.strictEqual(specification.and(specification) instanceof AllMatch, true);
    });
});
