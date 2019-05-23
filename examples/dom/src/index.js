import React from 'react';
import { render } from 'react-dom';
import { IsocontentDOM } from 'react-isocontent-dom';

function Main() {
    return (
        <main>
            <h1>Isocontent</h1>

            <IsocontentDOM
                content={[
                    { type: 'text', value: 'foo' },
                    {
                        type: 'block',
                        block_type: 'list',
                        arguments: { ordered: false },
                        children: [
                            { type: 'block', block_type: 'list_item', children: [{ type: 'text', value: 'bar' }] },
                            { type: 'block', block_type: 'list_item', children: [{ type: 'text', value: 'baz' }] },
                        ],
                    },
                    { type: 'block', block_type: 'strong', children: [{ type: 'text', value: 'qux ' }] },
                    { type: 'text', value: 'foo ' },
                    { type: 'block', block_type: 'strong', children: [{ type: 'text', value: 'baz ' }] },
                    { type: 'text', value: 'baz' },
                ]}
            />
        </main>
    );
}

render(<Main />, document.getElementById('root'));
