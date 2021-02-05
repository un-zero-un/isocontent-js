"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var isocontent_1 = require("isocontent");
var react_isocontent_1 = __importDefault(require("react-isocontent"));
var react_native_1 = require("react-native");
var Style_1 = require("./Style");
var defaultBlocks = function (styles) { return [
    [
        isocontent_1.blockType('paragraph'),
        function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return react_1.default.createElement(react_native_1.Text, { style: styles.paragraph }, renderNode(node.children));
        },
    ],
    [
        isocontent_1.blockType('inline_text'),
        function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return react_1.default.createElement(react_native_1.Text, { style: styles.inlineText }, renderNode(node.children));
        },
    ],
    [isocontent_1.blockType('emphasis'), function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return react_1.default.createElement(react_native_1.Text, { style: styles.emphasis }, renderNode(node.children));
        }],
    [isocontent_1.blockType('strong'), function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return react_1.default.createElement(react_native_1.Text, { style: styles.strong }, renderNode(node.children));
        }],
    [isocontent_1.blockType('generic'), function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return react_1.default.createElement(react_native_1.View, { style: styles.generic }, renderNode(node.children));
        }],
    [
        isocontent_1.blockType('list').and(isocontent_1.blockArgument('ordered', false)),
        function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return react_1.default.createElement(react_native_1.View, { style: styles.list }, renderNode(node.children));
        },
    ],
    [
        isocontent_1.blockType('list').and(isocontent_1.blockArgument('ordered', true)),
        function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return react_1.default.createElement(react_native_1.View, { style: styles.list }, renderNode(node.children));
        },
    ],
    [
        isocontent_1.blockType('list_item'),
        function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return react_1.default.createElement(react_native_1.View, { style: styles.listItem }, renderNode(node.children));
        },
    ],
    [
        isocontent_1.blockType('title').and(isocontent_1.blockArgument('level', 1)),
        function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return (react_1.default.createElement(react_native_1.Text, { style: styles.title1 },
                react_1.default.createElement(react_native_1.Text, null, "Level1"),
                renderNode(node.children)));
        },
    ],
    [
        isocontent_1.blockType('title').and(isocontent_1.blockArgument('level', 2)),
        function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return (react_1.default.createElement(react_native_1.Text, { style: styles.title2 },
                react_1.default.createElement(react_native_1.Text, null, "Level2"),
                renderNode(node.children)));
        },
    ],
    [
        isocontent_1.blockType('title').and(isocontent_1.blockArgument('level', 3)),
        function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return (react_1.default.createElement(react_native_1.Text, { style: styles.title3 },
                react_1.default.createElement(react_native_1.Text, null, "Level3"),
                renderNode(node.children)));
        },
    ],
    [
        isocontent_1.blockType('title').and(isocontent_1.blockArgument('level', 4)),
        function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return (react_1.default.createElement(react_native_1.Text, { style: styles.title4 },
                react_1.default.createElement(react_native_1.Text, null, "Level4"),
                renderNode(node.children)));
        },
    ],
    [isocontent_1.blockType('quote'), function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return react_1.default.createElement(react_native_1.View, null, renderNode(node.children));
        }],
    [isocontent_1.blockType('new_line'), function () { return react_1.default.createElement(react_native_1.View, null); }],
    [
        isocontent_1.blockType('link'),
        function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return (react_1.default.createElement(react_native_1.Text, { style: styles.link, onPress: function () {
                    react_native_1.Linking.openURL(node.props.href);
                } }, renderNode(node.children)));
        },
    ],
    [isocontent_1.blockType('stripped'), function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return react_1.default.createElement(react_native_1.Text, { style: styles.stripped }, renderNode(node.children));
        }],
    [isocontent_1.blockType('subscript'), function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return react_1.default.createElement(react_native_1.Text, { style: styles.subscript }, renderNode(node.children));
        }],
    [isocontent_1.blockType('superscript'), function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return react_1.default.createElement(react_native_1.Text, { style: styles.superscript }, renderNode(node.children));
        }],
    [
        isocontent_1.blockType('separator'),
        function (_a) {
            var node = _a.node, renderNode = _a.renderNode;
            return react_1.default.createElement(react_native_1.View, { style: styles.separator }, renderNode(node.children));
        },
    ],
]; };
function IsocontentNative(_a) {
    var renderTextNode = _a.renderTextNode, renderBlockNode = _a.renderBlockNode, ast = _a.ast, content = _a.content, _b = _a.blocks, blocks = _b === void 0 ? defaultBlocks : _b, _c = _a.styles, styles = _c === void 0 ? Style_1.defaultStyles : _c;
    var styledBlocks = blocks(styles);
    return (react_1.default.createElement(react_isocontent_1.default, { content: content, ast: ast, renderTextNode: renderTextNode ? renderTextNode : function (_a) {
            var node = _a.node;
            return react_1.default.createElement(react_native_1.Text, null, node.value);
        }, renderBlockNode: renderBlockNode
            ? renderBlockNode
            : function (_a) {
                var node = _a.node, renderNode = _a.renderNode;
                var block = styledBlocks.filter(function (_a) {
                    var spec = _a[0];
                    return spec.isSatisfiedBy(node);
                });
                console.log("Node: ", node.blockType);
                console.log("Block: ", block.length > 0 ? 'found' : "None!");
                if (0 !== block.length) {
                    return block[0][1]({ node: node, renderNode: renderNode });
                }
                return react_1.default.createElement(react_native_1.View, null, renderNode(node.children));
            } }));
}
exports.default = IsocontentNative;
