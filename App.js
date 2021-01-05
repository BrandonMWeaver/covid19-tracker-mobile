import React, { Component } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';

export default class App extends Component {
  state = {
    country: "us"
  }

  changeCountry = country => {
    this.setState({
      country: country
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar changeCountry={this.changeCountry} />
        <Dashboard key={this.state.country} country={this.state.country} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff'
  }
});
