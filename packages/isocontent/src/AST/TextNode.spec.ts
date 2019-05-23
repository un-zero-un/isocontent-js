import assert from 'assert';
import {TextNode} from './';

describe('TextNode', () => {
    it('it creates from array with no children', () => {
        const node = TextNode.fromText('foobar');

        assert.strictEqual(node.TYPE, 'text');
        assert.strictEqual(node.value, 'foobar');
    });
});
