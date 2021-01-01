import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Dashboard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff'
  }
});
