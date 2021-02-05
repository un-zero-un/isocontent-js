"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var react_1 = __importDefault(require("react"));
var server_1 = require("react-dom/server");
var _1 = require("./");
describe('<IsocontentDOM />', function () {
    it('Should render text node', function () {
        var result = server_1.renderToString(react_1.default.createElement(_1.IsocontentDOM, { content: { type: 'text', value: 'foobar' } }));
        assert_1.default.strictEqual(result, 'foobar');
    });
    it('Should render basic block node with a text node', function () {
        var result = server_1.renderToString(react_1.default.createElement(_1.IsocontentDOM, { content: {
                type: 'block',
                block_type: 'strong',
                children: [{ type: 'text', value: 'barbaz' }],
            } }));
        assert_1.default.strictEqual(result, '<strong data-reactroot="">barbaz</strong>');
    });
    it('Should render block node with a block and text node', function () {
        var result = server_1.renderToString(react_1.default.createElement(_1.IsocontentDOM, { content: {
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
            } }));
        assert_1.default.strictEqual(result, '<p data-reactroot="">foo qux<strong>bar baz</strong></p>');
    });
    it('Should render block node with a block and text node', function () {
        var result = server_1.renderToString(react_1.default.createElement(_1.IsocontentDOM, { content: {
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
            } }));
        assert_1.default.strictEqual(result, '<p data-reactroot="">foo qux<h4>bar baz</h4></p>');
    });
    it('Should render block node with a unknow type', function () {
        var result = server_1.renderToString(react_1.default.createElement(_1.IsocontentDOM, { content: {
                type: 'block',
                block_type: 'unknown',
                children: [{ type: 'text', value: 'foo qux ' }, { type: 'text', value: 'bar baz' }],
            } }));
        assert_1.default.strictEqual(result, '<div data-reactroot="">foo qux <!-- -->bar baz</div>');
    });
});
