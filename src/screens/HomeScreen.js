import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Toolbar from '../components/Toolbar';
import Drawer from 'react-native-drawer';
import SumResistance from '../components/SumResistance'
import ToolListScreen from './ToolListScreen';

class HomeScreen extends Component {
  openDrawer = () => {
    this._drawer.open();
    console.log('open')
  };
  closeDrawer = () => {
    this._drawer.close();
    console.log('close')
  };
  render() {
    return (
      <Drawer ref={ref => (this._drawer = ref)} 
          content={ <ToolListScreen onPress  = {this.closeDrawer}/> }
          type = 'overlay'
          tweenDuration = {100}
          openDrawerOffset = {140}
          >
        <View style={styles.container}>
          <Toolbar onPress={this.openDrawer} />
          <SumResistance SumRes = {120}/>
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
