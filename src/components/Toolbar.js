import React from 'react';
import {StyleSheet,View,Text,TouchableHighlight} from 'react-native';
import {Font} from 'expo'
import Fontawesome from '../../assets/fa-solid-900.ttf'
import Button from '../elements/button'

class Toolbar extends React.Component{
  state={
    fontLoaded:false
  }
  async componentWillMount(){
    await Font.loadAsync({
      fontawesome: Fontawesome
    });
    this.setState({fontLoaded:true})
  }

  PopDrawer(){
    console.log("Pop!!");
  }
    render(){
        return (
        <View style = {styles.container}>
        {
          this.state.fontLoaded ? (
            <Button 
            style = { styles.buttonstyle} 
            color = '#162226' 
            url = {'\uf552'}
            size = {60}
            onPress = {() => {this.props.onPress()}}
            />
          ):null
          
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