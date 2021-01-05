import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class SearchBar extends Component {
    state = {
        value: "Search"
    }

    clearValue = () => {
        this.setState({
            value: ''
        });
    }

    changeText = e => {
        this.setState({
            value: e
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput value={this.state.value} onChangeText={e => this.changeText(e)} onFocus={this.clearValue} style={styles.textInput} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    textInput: {
        padding: 5,
        alignSelf: "stretch",
        textAlign: "center",
        borderWidth: 1
    }
});
