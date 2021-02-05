"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var _1 = require("./");
describe('BlockNode', function () {
    it('it creates from array with no children', function () {
        var node = _1.BlockNode.fromBlockType('strong', { foo: 'bar' });
        assert_1.default.strictEqual(node.TYPE, 'block');
        assert_1.default.strictEqual(node.blockType, 'strong');
        assert_1.default.strictEqual(node.props.foo, 'bar');
        assert_1.default.strictEqual(node.children, null);
    });
    it('it creates from array with children', function () {
        var node = _1.BlockNode.fromBlockType('strong', {}, _1.NodeList.fromArray([_1.TextNode.fromText('foo')]));
        assert_1.default.strictEqual(node.TYPE, 'block');
        assert_1.default.strictEqual(node.children.nodes.length, 1);
    });
});
