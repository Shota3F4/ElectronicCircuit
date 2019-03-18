import React,{Component} from 'react'
import {StyleSheet, View,Text,}from 'react-native'
import ToolList from '../components/ToolList'
import Button from '../elements/button'



class ToolListScreen extends Component{
  render(){
    return (
      <View style = {styles.container}>
        <View style = {styles.topstyle}>
          <View style = {styles.returnbutton}>
            <Button 
              url = {'\uf101'} 
              size = {105} 
              color = '#fff'
              style = {{top:0}}
              onPress = {() => {this.props.onPress()}}
              />
          </View>
        </View>
        <View style = {styles.liststyle}>
          <ToolList onPress = {() => {this.props.onPress()}} 
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffb'
  },
  topstyle:{
    top:100,
    flex:1,
    alignSelf:'center',
  },
  returnbutton:{
    backgroundColor:'#3ca2ff',
    borderRadius:14,
    alignItems:'center',
   justifyContent: 'center',
    width:150,
    height:100
  },
  liststyle:{
    flex:2,
    paddingTop:10
  },
})

export default ToolListScreen