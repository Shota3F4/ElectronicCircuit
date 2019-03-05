import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Resistance from './src/components/Resistanse'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.appbar}>
        <Text style = {styles.text}>Hello World</Text>
          <Resistance />
        </View>
      </View > 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    top:400,
    alignSelf:'center'
  }
});
