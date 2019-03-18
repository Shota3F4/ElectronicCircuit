import React ,{Component} from 'react'
import {StyleSheet ,View,Text} from 'react-native'

class SumResistance extends Component{


  render(){
    const {SumRes} = this.props
    return(
      <View style = {styles.container}>
     <Text style = {styles.text}>全抵抗:{SumRes}Ω</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    width:140,
    height:150,
    top:160,
    left:200,
    backgroundColor:'#ff8',
    borderRadius:24
  },
  text:{
    fontSize:23,
    padding:10

  }
})

export default SumResistance