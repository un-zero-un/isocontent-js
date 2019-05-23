import assert from 'assert';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { IsocontentDOM } from './';

describe('<IsocontentDOM />', () => {
    it('Should render text node', () => {
        const result = renderToString(<IsocontentDOM content={{ type: 'text', value: 'foobar' }} />);

        assert.strictEqual(result, 'foobar');
    });

    it('Should render basic block node with a text node', () => {
        const result = renderToString(
            <IsocontentDOM
                content={{
                    type: 'block',
                    block_type: 'strong',
                    children: [{ type: 'text', value: 'barbaz' }],
                }}
            />
        );

        assert.strictEqual(result, '<strong data-reactroot="">barbaz</strong>');
    });

    it('Should render block node with a block and text node', () => {
        const result = renderToString(
            <IsocontentDOM
                content={{
                    type: 'block',
                    block_type: 'paragraph',
                    children: [
                        { type: 'text', value: 'foo qux' },
                        {
                            type: 'block',
                            block_type: 'strong',
                            children: [{ type: 'text', value: 'bar baz' }],
                        },
                    ],
                }}
            />
        );

        assert.strictEqual(result, '<p data-reactroot="">foo qux<strong>bar baz</strong></p>');
    });

    it('Should render block node with a block and text node', () => {
        const result = renderToString(
            <IsocontentDOM
                content={{
                    type: 'block',
                    block_type: 'paragraph',
                    children: [
                        { type: 'text', value: 'foo qux' },
                        {
                            type: 'block',
                            block_type: 'title',
                            arguments: { level: 4 },
                            children: [{ type: 'text', value: 'bar baz' }],
                        },
                    ],
                }}
            />
        );

        assert.strictEqual(result, '<p data-reactroot="">foo qux<h4>bar baz</h4></p>');
    });
});
