import React from 'react';
import { FlatList, Text, View } from 'react-native';

function defaultOrderedRenderer({ item, index }) {
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center' }}>
            <Text>{index + 1}. </Text>
            {item}
        </View>
    );
}

function defaultItemRenderer({ item }) {
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center' }}>
            <Text style={{ fontSize: 6, paddingRight: 5 }}>{'\u2B24'} </Text>
            {item}
        </View>
    );
}

interface Props {
    children: React.Element;
    styles: StyleSheet;
    orderedRenderer: (props) => React.Element;
    itemRenderer: (props) => React.Element;
}

export const ListComponent: React.FunctionComponent<Props> = ({
    children,
    style,
    ordered = false,
    itemRenderer = defaultItemRenderer,
    orderedRenderer = defaultOrderedRenderer,
}) => {
    if (ordered) {
        return <FlatList data={children} renderItem={orderedRenderer} style={style} />;
    } else {
        return <FlatList data={children} renderItem={itemRenderer} style={style} />;
    }
};
