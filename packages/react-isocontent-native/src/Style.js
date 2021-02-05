"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
exports.defaultStyles = new react_native_1.StyleSheet.create({
    paragraph: {},
    inlineText: {},
    emphasis: {
        fontStyle: 'italic',
    },
    strong: {
        fontWeight: 'bold',
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    title1: {
        fontSize: 10,
    },
    title2: {
        fontSize: 10,
    },
    title3: {
        fontSize: 10,
    },
    title4: {
        fontSize: 10,
    },
    title5: {
        fontSize: 10,
    },
    title6: {
        fontSize: 10,
    },
    list: {},
    listItem: {},
    stripped: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    subscript: {
        fontSize: 10,
        lineHeight: 0,
    },
    superscript: {
        fontSize: 10,
        lineHeight: 10,
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#000000',
    },
    generic: {
        backgroundColor: 'red',
    },
});
