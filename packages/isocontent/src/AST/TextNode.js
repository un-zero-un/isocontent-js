"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var TextNode = /** @class */ (function () {
    function TextNode(value) {
        this.TYPE = Node_1.TEXT_NODE;
        this._value = value;
    }
    Object.defineProperty(TextNode.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    TextNode.fromText = function (value) {
        return new TextNode(value);
    };
    return TextNode;
}());
exports.default = TextNode;
