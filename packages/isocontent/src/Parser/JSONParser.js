"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NodeList_1 = __importDefault(require("../AST/NodeList"));
var TextNode_1 = __importDefault(require("../AST/TextNode"));
var BlockNode_1 = __importDefault(require("../AST/BlockNode"));
var JSONParser = /** @class */ (function () {
    function JSONParser() {
    }
    JSONParser.prototype.parse = function (input) {
        var _this = this;
        if (input instanceof Array) {
            return NodeList_1.default.fromArray(input.map(function (subNode) { return _this.parse(subNode); }));
        }
        switch (input.type) {
            case 'text':
                return TextNode_1.default.fromText(input.value);
            case 'block':
                console.log(input);
                return BlockNode_1.default.fromBlockType(input.block_type, input.arguments, input.children ? this.parse(input.children) : null);
        }
    };
    return JSONParser;
}());
exports.default = JSONParser;
