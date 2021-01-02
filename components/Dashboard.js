import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Dashboard extends Component {
    state = {
        cases: 0,
        deaths: 0,
        recovered: 0
    }

    componentDidMount() {
        fetch("https://covid19-api.org/api/status/us")
        .then(r => r.json())
        .then(o => {
            this.setState({
                cases: o.cases,
                deaths: o.deaths,
                recovered: o.recovered
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Cases: {this.state.cases}</Text>
                <Text>Deaths: {this.state.deaths}</Text>
                <Text>Recovered: {this.state.recovered}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
