"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var isocontent_1 = require("isocontent");
var react_1 = __importStar(require("react"));
function Isocontent(_a) {
    var content = _a.content, ast = _a.ast, renderBlockNode = _a.renderBlockNode, renderTextNode = _a.renderTextNode;
    function renderNode(node) {
        if (node instanceof isocontent_1.NodeList) {
            return node.nodes.map(function (subNode, i) { return react_1.default.createElement(react_1.Fragment, { key: i }, renderNode(subNode)); });
        }
        if (node instanceof isocontent_1.BlockNode) {
            return renderBlockNode({ node: node, renderNode: renderNode });
        }
        if (node instanceof isocontent_1.TextNode) {
            return renderTextNode({ node: node });
        }
        return null;
    }
    if (content) {
        return renderNode(isocontent_1.parse(content));
    }
    return renderNode(ast);
}
exports.default = Isocontent;
