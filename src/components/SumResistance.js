import React ,{Component} from 'react'
import {StyleSheet ,View,Text} from 'react-native'

class SumResistance extends Component{


  render(){
    const {SumRes} = this.props
    return(
      <View style = {styles.container}>
     <Text style = {styles.text}>{SumRes}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    width:150,
    height:150,
    top:300,
    left:130,
    backgroundColor:'#8dd'
  },
  text:{
    fontSize:30,
    alignSelf:'center'

  }
})

export default SumResistance