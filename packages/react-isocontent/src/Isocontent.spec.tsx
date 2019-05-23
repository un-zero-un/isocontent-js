import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';

import { Isocontent, BlockNodeProps, TextNodeProps } from './';

describe('<Isocontent />', () => {
    const renderProps = {
        renderBlockNode: ({ node, renderNode }: BlockNodeProps) => {
            return <div {...node.props}>{renderNode(node.children)}</div>;
        },
        renderTextNode: ({ node }: TextNodeProps) => {
            return node.value;
        },
    };

    it('Should render text node', () => {
        const wrapper = shallow(<Isocontent content={{ type: 'text', value: 'foobar' }} {...renderProps} />);

        assert.strictEqual(wrapper.length, 1);
        assert.strictEqual(wrapper.children().length, 0);
        assert.strictEqual(wrapper.text(), 'foobar');
    });

    it('Should render basic block node with a text node', () => {
        const wrapper = shallow(
            <Isocontent
                content={{
                    type: 'block',
                    block_type: 'strong',
                    children: [{ type: 'text', value: 'barbaz' }],
                }}
                {...renderProps}
            />
        );

        assert.strictEqual(wrapper.length, 1);
        assert.strictEqual(wrapper.children().length, 1);
        assert.strictEqual(
            wrapper
                .children()
                .childAt(0)
                .children().length,
            0
        );
        assert.strictEqual(wrapper.children().text(), 'barbaz');
    });

    it('Should render block node with a block and text node', () => {
        const wrapper = shallow(
            <Isocontent
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
                {...renderProps}
            />
        );

        assert.strictEqual(wrapper.length, 1);
        assert.strictEqual(wrapper.children().length, 2);
        assert.strictEqual(wrapper.childAt(0).children().length, 0);
        assert.strictEqual(wrapper.childAt(1).children().length, 1);
        assert.strictEqual(wrapper.childAt(0).text(), 'foo qux');
        assert.strictEqual(wrapper.childAt(1).text(), 'bar baz');
    });

    it('Should render block node with props', () => {
        const wrapper = shallow(
            <Isocontent
                content={{
                    type: 'block',
                    block_type: 'paragraph',
                    children: [
                        { type: 'text', value: 'foo qux' },
                        {
                            type: 'block',
                            block_type: 'strong',
                            arguments: { level: 4 },
                            children: [{ type: 'text', value: 'bar baz' }],
                        },
                    ],
                }}
                {...renderProps}
            />
        );
        assert.strictEqual(wrapper.childAt(1).prop('level'), 4);
    });
});
