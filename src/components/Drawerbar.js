import React from 'react';
import {StyleSheet,View,Text,TouchableHighlight} from 'react-native';
import {Font} from 'expo'
import Fontawesome from '../../assets/fa-solid-900.ttf'


class Drawerbar extends React.Component{
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
            <TouchableHighlight 
            style = {styles.buttonstyle}
            underlayColor='transparent'
            onPress={() => { this.PopDrawer()}}
            >
              <Text style = {styles.buttontextstyle}>{'\uf552'}</Text>
            </TouchableHighlight> 
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
    top:100,
    backgroundColor:'#7cffff',
    borderRadius:15
    
  },
  buttonstyle:{
    top:10,
    left:30,
    width:50,
    height:50,
    
  },
  buttontextstyle:{
    justifyContent:'center',
    alignSelf:'center',
    fontFamily:'fontawesome',
    fontSize:56,
    color:'#162226'
  }
});

export default Drawerbar