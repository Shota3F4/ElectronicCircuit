import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Resistance from './src/components/Resistanse'
import Toolbar from './src/components/Toolbar'



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.appbar}>
          <Toolbar />
        </View>
      </View > 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
