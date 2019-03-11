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
            { key: require('../../assets/demoImage/JerryandNibles.jpg') },
            { key: require('../../assets/demoImage/Tomface03.jpg') },
            { key: require('../../assets/demoImage/Jerry.jpg') },
            { key: require('../../assets/demoImage/Nibles.png') },
            { key: require('../../assets/demoImage/Jerryface.jpg') },
            { key: require('../../assets/demoImage/Tomface.jpg') },
            { key: require('../../assets/demoImage/Tomface02.png') },
          ]
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatlist}
          data={this.state.ImagePathdata}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Tool image={item.key} />
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
