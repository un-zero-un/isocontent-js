import { KeepAwake, registerRootComponent } from 'expo';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IsocontentNative} from 'react-isocontent-native';

if (__DEV__) {
    KeepAwake.activate();
}

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <IsocontentNative
                    content={[
                        {type: 'text', value: 'foo'},
                        {
                            type: 'block',
                            block_type: 'list',
                            arguments: {ordered: false},
                            children: [
                                {type: 'block', block_type: 'list_item', children: [{type: 'text', value: 'bar'}]},
                                {type: 'block', block_type: 'list_item', children: [{type: 'text', value: 'baz'}]},
                            ],
                        },
                        {type: 'block', block_type: 'strong', children: [{type: 'text', value: 'qux '}]},
                        {type: 'text', value: 'foo '},
                        {type: 'block', block_type: 'strong', children: [{type: 'text', value: 'baz '}]},
                        {type: 'text', value: 'baz'},
                    ]}
                />

                <View styles={styles.strong}><Text>Coucou</Text></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

registerRootComponent(App);
