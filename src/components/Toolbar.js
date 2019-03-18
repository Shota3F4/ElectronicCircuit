import React from 'react';
import {StyleSheet,View,Text,TouchableHighlight} from 'react-native';
import Button from '../elements/button'

class Toolbar extends React.Component{
    render(){
        return (
        <View style = {styles.container}>
        {
            <Button 
            style = { styles.buttonstyle} 
            color = '#162226' 
            url = {'\uf552'}
            size = {60}
            onPress = {() => {this.props.onPress()}}
            />
        }
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    right:20,
    width:90,
    height:70,
    top:80,
    backgroundColor:'#7cffff',
    borderRadius:15
    
  },
  buttonstyle:{
    top:5,
    left:25,
  }
});

export default Toolbar