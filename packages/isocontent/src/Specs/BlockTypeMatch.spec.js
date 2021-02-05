"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var _1 = require("./");
var __1 = require("../");
var AllMatch_1 = __importDefault(require("./AllMatch"));
describe('BlockTypeMatch / blockType()', function () {
    it('match identical type', function () {
        var specification = _1.blockType('foo');
        assert_1.default.strictEqual(specification.isSatisfiedBy(__1.BlockNode.fromBlockType('foo')), true);
    });
    it('reject different type', function () {
        var specification = _1.blockType('foo');
        assert_1.default.strictEqual(specification.isSatisfiedBy(__1.BlockNode.fromBlockType('bar')), false);
    });
    it('can be combined', function () {
        var specification = _1.blockType('foo');
        assert_1.default.strictEqual(specification.and(specification) instanceof AllMatch_1.default, true);
    });
});
