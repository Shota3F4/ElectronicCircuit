import React,{Component} from 'react'
import {StyleSheet,View,Image ,TouchableHighlight} from 'react-native'

class Tool extends Component{
  
  onPress(){

  }
  render(){
    const {url,color,style,onPress,size} = this.props;
    

    return (
      <View style={styles.container}>
       
         <TouchableHighlight 
         style = {styles.buttonstyle}
         underlayColor='#ddd'
         onPress ={this.onPress}
         >
           <Image  source={require('../../assets/ResistanceFigure.png')} 
            
            style = {styles.imagestyle}
            />
        </TouchableHighlight>
      </View>
    )
  }
}
//{require('../../assets/ResistanceFigure.png')}

const styles=StyleSheet.create({
  container:{
   width:200,
   height:120,
   borderWidth:1,
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
