import { StyleSheet } from 'react-native';

export const defaultStyles = new StyleSheet.create({
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
        fontSize: 26,
    },
    title2: {
        fontSize: 24,
    },
    title3: {
        fontSize: 22,
    },
    title4: {
        fontSize: 20,
    },
    title5: {
        fontSize: 18,
    },
    title6: {
        fontSize: 16,
    },
    unorderedList: { paddingLeft: 20 },
    orderedList: { paddingLeft: 20 },
    listItem: {},
    stripped: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    subscript: {
        fontSize: 10, // @TODO: Fix this with size *relative* to parent
        lineHeight: 0,
    },
    superscript: {
        fontSize: 10, // @TODO: Fix this with size *relative* to parent
        lineHeight: 10,
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#000000',
    },
    quote: {
        margin: 5,
        padding: 10,
        borderLeftWidth: 1,
        borderColor: 'black',
    },
    code: {
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    generic: {
        backgroundColor: 'red',
    },
});
