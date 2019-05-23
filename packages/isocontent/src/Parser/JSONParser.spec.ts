import assert from 'assert';

import { NodeList, TextNode, BlockNode, JSONParser } from '../';

describe('JsonParser', () => {
    it('should parse empty array', () => {
        assert.deepStrictEqual(NodeList.fromArray([]), new JSONParser().parse([]));
    });

    it('should parse text node', () => {
        assert.deepStrictEqual(TextNode.fromText('foobar'), new JSONParser().parse({ type: 'text', value: 'foobar' }));
    });

    it('should parse block node', () => {
        assert.deepStrictEqual(
            BlockNode.fromBlockType('generic'),
            new JSONParser().parse({ type: 'block', block_type: 'generic' })
        );
    });

    it('should parse block node with props', () => {
        assert.deepStrictEqual(
            BlockNode.fromBlockType('title', { level: 4 }),
            new JSONParser().parse({
                type: 'block',
                block_type: 'title',
                arguments: { level: 4 },
            })
        );
    });

    it('should parse block node with children', () => {
        assert.deepStrictEqual(
            BlockNode.fromBlockType('title', { level: 4 }, NodeList.fromArray([TextNode.fromText('foobar')])),
            new JSONParser().parse({
                type: 'block',
                block_type: 'title',
                arguments: { level: 4 },
                children: [{ type: 'text', value: 'foobar' }],
            })
        );
    });
});
