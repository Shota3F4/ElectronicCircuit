import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Resistance from './assets/src/components/Resistanse'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.appbar}>
          <Resistance />
        </View>
      </View > 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
