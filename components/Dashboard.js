import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Statistic from './Statistic';

export default class Dashboard extends Component {
    state = {
        last_update: "...",
        cases: "...",
        deaths: "...",
        recovered: "...",
        new_cases_percentage: "...",
        new_deaths_percentage: "...",
        new_recovered_percentage: "..."
    }

    componentDidMount() {
        this.fetchCountryData();
    }

    fetchCountryData = () => {
        this.setState({
            last_update: "...",
            cases: "...",
            deaths: "...",
            recovered: "...",
            new_cases_percentage: "...",
            new_deaths_percentage: "...",
            new_recovered_percentage: "..."
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
                <Statistic type={"cases"} statistic={this.state.cases} newPercentage={this.state.new_cases_percentage} />
                <Statistic type={"deaths"} statistic={this.state.deaths} newPercentage={this.state.new_deaths_percentage} />
                <Statistic type={"recovered"} statistic={this.state.recovered} newPercentage={this.state.new_recovered_percentage} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5
    }
});
