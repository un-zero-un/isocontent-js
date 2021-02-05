"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var isocontent_1 = require("isocontent");
var react_isocontent_1 = __importDefault(require("react-isocontent"));
var defaultBlocks = [
    [isocontent_1.blockType('paragraph'), 'p'],
    [isocontent_1.blockType('inline_text'), 'span'],
    [isocontent_1.blockType('emphasis'), 'em'],
    [isocontent_1.blockType('strong'), 'strong'],
    [isocontent_1.blockType('generic'), 'span'],
    [isocontent_1.blockType('list').and(isocontent_1.blockArgument('ordered', false)), 'ul'],
    [isocontent_1.blockType('list').and(isocontent_1.blockArgument('ordered', true)), 'ol'],
    [isocontent_1.blockType('list_item'), 'li'],
    [isocontent_1.blockType('title').and(isocontent_1.blockArgument('level', 3)), 'h3'],
    [isocontent_1.blockType('title').and(isocontent_1.blockArgument('level', 4)), 'h4'],
    [isocontent_1.blockType('title').and(isocontent_1.blockArgument('level', 5)), 'h5'],
    [isocontent_1.blockType('quote'), 'blockquote'],
    [isocontent_1.blockType('new_line'), 'br'],
    [isocontent_1.blockType('link'), 'a'],
];
function renderBlockNodeFromBlockComponent(node, blockComponent, renderNode) {
    return react_1.default.createElement(blockComponent, {}, renderNode(node.children));
}
function IsocontentDOM(_a) {
    var content = _a.content, ast = _a.ast, renderTextNode = _a.renderTextNode, renderBlockNode = _a.renderBlockNode, _b = _a.blocks, blocks = _b === void 0 ? defaultBlocks : _b;
    return (react_1.default.createElement(react_isocontent_1.default, { content: content, ast: ast, renderTextNode: renderTextNode ? renderTextNode : function (_a) {
            var node = _a.node;
            return node.value;
        }, renderBlockNode: renderBlockNode
            ? renderBlockNode
            : function (_a) {
                var node = _a.node, renderNode = _a.renderNode;
                var block = blocks.filter(function (_a) {
                    var spec = _a[0];
                    return spec.isSatisfiedBy(node);
                });
                if (0 !== block.length) {
                    return renderBlockNodeFromBlockComponent(node, block[0][1], renderNode);
                }
                return react_1.default.createElement("div", null, renderNode(node.children));
            } }));
}
exports.default = IsocontentDOM;
