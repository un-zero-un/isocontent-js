"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var __1 = require("../");
describe('parse()', function () {
    it('should parse javascript input', function () {
        assert_1.default.deepStrictEqual(__1.parse([]), __1.NodeList.fromArray([]));
    });
    it('should parse json input', function () {
        assert_1.default.deepStrictEqual(__1.parse('[]'), __1.NodeList.fromArray([]));
    });
});
