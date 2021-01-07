import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Statistic(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.type}>{props.type.toUpperCase()}</Text>
            <Text>{props.statistic}</Text>
            <Text>Increase - {props.newPercentage}%</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
        borderWidth: 1
    },
    type: {
        fontSize: 20
    }
});
