import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberFormat from 'react-number-format';

export default function Statistic(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.type}>{props.type.toUpperCase()}</Text>
            <NumberFormat value={props.statistic} renderText={t => <Text style={styles.text}>{t}</Text>} displayType={"text"} thousandSeparator={true} />
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
