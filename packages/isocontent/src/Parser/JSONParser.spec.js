"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var __1 = require("../");
describe('JsonParser', function () {
    it('should parse empty array', function () {
        assert_1.default.deepStrictEqual(__1.NodeList.fromArray([]), new __1.JSONParser().parse([]));
    });
    it('should parse text node', function () {
        assert_1.default.deepStrictEqual(__1.TextNode.fromText('foobar'), new __1.JSONParser().parse({ type: 'text', value: 'foobar' }));
    });
    it('should parse block node', function () {
        assert_1.default.deepStrictEqual(__1.BlockNode.fromBlockType('generic'), new __1.JSONParser().parse({ type: 'block', block_type: 'generic' }));
    });
    it('should parse block node with props', function () {
        assert_1.default.deepStrictEqual(__1.BlockNode.fromBlockType('title', { level: 4 }), new __1.JSONParser().parse({
            type: 'block',
            block_type: 'title',
            arguments: { level: 4 },
        }));
    });
    it('should parse block node with children', function () {
        assert_1.default.deepStrictEqual(__1.BlockNode.fromBlockType('title', { level: 4 }, __1.NodeList.fromArray([__1.TextNode.fromText('foobar')])), new __1.JSONParser().parse({
            type: 'block',
            block_type: 'title',
            arguments: { level: 4 },
            children: [{ type: 'text', value: 'foobar' }],
        }));
    });
});
