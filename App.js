import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Resistance from './src/components/Resistanse'
import ToolListScreen from './src/screens/ToolListScreen'



export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}> 
          <ToolListScreen />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
