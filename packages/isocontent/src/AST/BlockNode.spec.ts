import assert from 'assert';
import { BlockNode, NodeList, TextNode } from './';

describe('BlockNode', () => {
    it('it creates from array with no children', () => {
        const node = BlockNode.fromBlockType('strong', { foo: 'bar' });

        assert.strictEqual(node.TYPE, 'block');
        assert.strictEqual(node.blockType, 'strong');
        assert.strictEqual(node.props.foo, 'bar');
        assert.strictEqual(node.children, null);
    });

    it('it creates from array with children', () => {
        const node = BlockNode.fromBlockType('strong', {}, NodeList.fromArray([TextNode.fromText('foo')]));

        assert.strictEqual(node.TYPE, 'block');
        assert.strictEqual(node.children.nodes.length, 1);
    });
});
