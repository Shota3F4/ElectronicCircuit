import React from 'react'
import {StyleSheet, View ,Text,Image,TextInput} from 'react-native'

class Resistance extends React.Component{
  state={
    resistance:"1",
    Volts:5,

    Width:0,
    Height:0,
  }


   Current(){
     if(this.state.resistance != 0) {
       const I= this.state.Volts/this.state.resistance
       return (Math.round(I * 10000) / 10000)+'V'
     }
     else return "Infinity." 
   }


measureView(event){
  this.setState({Width:event.nativeEvent.layout.width})
  this.setState({Height:event.nativeEvent.layout.height})
}
  render(){
    return (
      <View style = {[styles.container,{width:this.state.Width,height:this.state.Height}]}>
          <Image source={require('../../assets/ResistanceFigure.png')} 
            onLayout={(event) => this.measureView(event)} 
            style = {styles.imagestyle}
            />
          <View style = {styles.resistanceInput}>
            <TextInput 
              style = {styles.input}  
              value = {this.state.resistance}
              onChangeText = {(text) => { this.setState({ resistance:text })}} 
            />
            <Text style = {styles.text}>Ω</Text>
          </View>
          <Text style = {styles.text}>{this.Current()}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    top:0,
    left:130,
    alignItems:'center'
  },
  imagestyle:{
    
  },
  resistanceInput:{
    margin:5,
    flexDirection:'row'
  },
  input:{
    fontSize:22,
    borderWidth:1
  },
  text:{
    fontSize:22,
  }
})

export default Resistance
