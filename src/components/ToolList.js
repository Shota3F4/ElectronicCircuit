import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Tool from '../elements/Tool';
import ResistanseImage from '../../assets/ResistanceFigure.png';
import Volt from '../../assets/Voltage.png';

class ToolList extends Component {
  state = {
    ImagePathdata: [],
  };

  componentWillMount(){
    this.setState(
      {ImagePathdata:[
            { key: require('../../assets/JerryandNibles.jpg') },
            { key: require('../../assets/Tomface03.jpg') },
            { key: require('../../assets/Jerry.jpg') },
            { key: require('../../assets/Nibles.png') },
            { key: require('../../assets/Jerryface.jpg') },
            { key: require('../../assets/Tomface.jpg') },
            { key: require('../../assets/Tomface02.png') },
          ]
    })
  }
  render() {
    const {onPress} = this.props
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatlist}
          data={this.state.ImagePathdata}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Tool image={item.key} onPress = {onPress}/>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
  },
  item: {
    alignSelf: 'center',
    height: 140,
    width: 200,
    
  },
});
export default ToolList;
