"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NodeList = /** @class */ (function () {
    function NodeList(nodes) {
        this._nodes = nodes;
    }
    Object.defineProperty(NodeList.prototype, "nodes", {
        get: function () {
            return this._nodes;
        },
        enumerable: true,
        configurable: true
    });
    NodeList.fromArray = function (nodes) {
        return new NodeList(nodes);
    };
    return NodeList;
}());
exports.default = NodeList;
