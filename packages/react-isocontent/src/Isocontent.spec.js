"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var enzyme_1 = require("enzyme");
var react_1 = __importDefault(require("react"));
var isocontent_1 = require("isocontent");
var _1 = require("./");
describe('<Isocontent />', function () {
    var renderProps = {
        renderBlockNode: function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return react_1.default.createElement("div", __assign({}, node.props), renderNode(node.children));
        },
        renderTextNode: function (_a) {
            var node = _a.node;
            return node.value;
        },
    };
    it('Should render text node', function () {
        var wrapper = enzyme_1.shallow(react_1.default.createElement(_1.Isocontent, __assign({ content: { type: 'text', value: 'foobar' } }, renderProps)));
        assert_1.default.strictEqual(wrapper.length, 1);
        assert_1.default.strictEqual(wrapper.children().length, 0);
        assert_1.default.strictEqual(wrapper.text(), 'foobar');
    });
    it('Should directly render AST', function () {
        var wrapper = enzyme_1.shallow(react_1.default.createElement(_1.Isocontent, __assign({ ast: isocontent_1.TextNode.fromText('foobar') }, renderProps)));
        assert_1.default.strictEqual(wrapper.length, 1);
        assert_1.default.strictEqual(wrapper.children().length, 0);
        assert_1.default.strictEqual(wrapper.text(), 'foobar');
    });
    it('Should render basic block node with a text node', function () {
        var wrapper = enzyme_1.shallow(react_1.default.createElement(_1.Isocontent, __assign({ content: {
                type: 'block',
                block_type: 'strong',
                children: [{ type: 'text', value: 'barbaz' }],
            } }, renderProps)));
        assert_1.default.strictEqual(wrapper.length, 1);
        assert_1.default.strictEqual(wrapper.children().length, 1);
        assert_1.default.strictEqual(wrapper
            .children()
            .childAt(0)
            .children().length, 0);
        assert_1.default.strictEqual(wrapper.children().text(), 'barbaz');
    });
    it('Should render block node with a block and text node', function () {
        var wrapper = enzyme_1.shallow(react_1.default.createElement(_1.Isocontent, __assign({ content: {
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
            } }, renderProps)));
        assert_1.default.strictEqual(wrapper.length, 1);
        assert_1.default.strictEqual(wrapper.children().length, 2);
        assert_1.default.strictEqual(wrapper.childAt(0).children().length, 0);
        assert_1.default.strictEqual(wrapper.childAt(1).children().length, 1);
        assert_1.default.strictEqual(wrapper.childAt(0).text(), 'foo qux');
        assert_1.default.strictEqual(wrapper.childAt(1).text(), 'bar baz');
    });
    it('Should render block node with props', function () {
        var wrapper = enzyme_1.shallow(react_1.default.createElement(_1.Isocontent, __assign({ content: {
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
            } }, renderProps)));
        assert_1.default.strictEqual(wrapper.childAt(1).prop('level'), 4);
    });
    it('Should render null for unknow Block', function () {
        var wrapper = enzyme_1.shallow(react_1.default.createElement(_1.Isocontent, __assign({ ast: { TYPE: 'unknown' } }, renderProps)));
        assert_1.default.strictEqual(wrapper.length, 1);
        assert_1.default.strictEqual(wrapper.text(), '');
    });
});
