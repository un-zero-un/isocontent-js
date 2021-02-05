"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var _1 = require("./");
describe('TextNode', function () {
    it('it creates from array with no children', function () {
        var node = _1.TextNode.fromText('foobar');
        assert_1.default.strictEqual(node.TYPE, 'text');
        assert_1.default.strictEqual(node.value, 'foobar');
    });
});
