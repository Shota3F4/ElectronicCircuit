import React,{Component} from 'react'
import {StyleSheet,View,Image ,TouchableHighlight} from 'react-native'

class Tool extends Component{
  
  onPress(){

  }
  render(){
    const {image,onPress} = this.props;
    

    return (
      <View style={styles.container}>
       
         <TouchableHighlight 
         style = {styles.buttonstyle}
         underlayColor='transparent'
         onPress ={onPress}
         >
           <Image  source={image}
            style = {styles.imagestyle}
            />
        </TouchableHighlight>
      </View>
    )
  }
}
//

const styles=StyleSheet.create({
  container:{
   width:200,
   height:120,
   borderWidth:1,
   backgroundColor:'#fff'
  },
  buttonstyle:{
    width:200,
    height:120,
  },
  imagestyle:{
    top:10,
    left:10,
    resizeMode : "contains",
    width:180,
    height:100

  }

})

export default Tool
