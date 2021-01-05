import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Dashboard extends Component {
    state = {
        last_update: "Loading...",
        cases: "Loading...",
        deaths: "Loading...",
        recovered: "Loading...",
        new_cases_percentage: "Loading...",
        new_deaths_percentage: "Loading...",
        new_recovered_percentage: "Loading..."
    }

    componentDidMount() {
        this.fetchCountryData();
    }

    fetchCountryData = () => {
        this.setState({
            last_update: "Loading...",
            cases: "Loading...",
            deaths: "Loading...",
            recovered: "Loading...",
            new_cases_percentage: "Loading...",
            new_deaths_percentage: "Loading...",
            new_recovered_percentage: "Loading..."
        });
        fetch(`https://covid19-api.org/api/status/${this.props.country}`)
        .then(r => r.json())
        .then(o => {
            this.setState({
                last_update: o.last_update.substring(0, 10),
                cases: o.cases,
                deaths: o.deaths,
                recovered: o.recovered
            });
        });
        fetch(`https://covid19-api.org/api/diff/${this.props.country}`)
        .then(r => r.json())
        .then(o => {
            this.setState({
                new_cases_percentage: o.new_cases_percentage,
                new_deaths_percentage: o.new_deaths_percentage,
                new_recovered_percentage: o.new_recovered_percentage
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.country}</Text>
                <Text>{this.state.last_update}</Text>
                <Text>Cases: {this.state.cases} - Increase: {this.state.new_cases_percentage}%</Text>
                <Text>Deaths: {this.state.deaths} - Increase: {this.state.new_deaths_percentage}%</Text>
                <Text>Recovered: {this.state.recovered} - Increase: {this.state.new_recovered_percentage}%</Text>
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
