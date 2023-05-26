import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const App : FC = () => {
    <View style={styles.container}>
        <Text>Home Screen</Text>
    </View>
}

export default App;

const styles = StyleSheet.create(
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
)