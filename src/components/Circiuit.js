import React,{Component} from 'react'
import {StyleSheet ,View,Text} from 'react-native'

class Circuit extends Component{
  state={
    Volt:5,
    Ampare:1,
    SRes:10
  }
  componentDidMount(){
    
    }
  render(){
    return(
      <View style = {styles.container}>
      </View>
    )
    
  }
}

const styles = StyleSheet.create({
  container:{
    width:280,
    height:270,
    top:100,
    left:50,
    borderWidth:4,

  }
})

export default Circuit