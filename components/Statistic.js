import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Statistic(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.type}>{props.type.toUpperCase()}</Text>
            <Text style={styles.text}>{props.statistic}</Text>
            <Text style={styles.text}>Increase - {props.newPercentage}%</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
        padding: 5,
        backgroundColor: "#cdcdff",
        borderRadius: 10
    },
    type: {
        color: "#ff0"
    },
    text: {
        color: "#fff"
    }
});
