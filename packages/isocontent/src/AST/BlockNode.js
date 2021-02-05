"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var BlockNode = /** @class */ (function () {
    function BlockNode(blockType, props, children) {
        if (children === void 0) { children = null; }
        this.TYPE = Node_1.BLOCK_NODE;
        this._blockType = blockType;
        this._props = props;
        this._children = children;
    }
    Object.defineProperty(BlockNode.prototype, "blockType", {
        get: function () {
            return this._blockType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlockNode.prototype, "props", {
        get: function () {
            return this._props;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlockNode.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    BlockNode.fromBlockType = function (blockType, props, children) {
        if (props === void 0) { props = {}; }
        if (children === void 0) { children = null; }
        return new BlockNode(blockType, props, children);
    };
    return BlockNode;
}());
exports.default = BlockNode;
