import React,{Component} from 'react'
import {StyleSheet,View,Text ,TouchableHighlight} from 'react-native'
import {Font} from 'expo'
import Fontawesome from '../../assets/fa-solid-900.ttf'

class Button extends Component{
  state={
    fontLoaded:false
  }
  async componentWillMount(){
    await Font.loadAsync({
      fontawesome: Fontawesome
    });
    this.setState({fontLoaded:true})
  }
  
  render(){
    const {url,color,style,onPress,size} = this.props;
    

    return (
      <View style={[styles.container,style]}>
       {this.state.fontLoaded ? (
         <TouchableHighlight 
         style = {[
           styles.buttonstyle,
           {
             width:size,
             height:size
         }
         ]}
         underlayColor='transparent'
         onPress ={onPress}
         >
          <Text style={[styles.buttontext,{color:color,fontSize:size}]}>{url}</Text>
        </TouchableHighlight>
       ):null
       }
      </View>
    )
  }
}


const styles=StyleSheet.create({
  container:{
    top:0,
    left:0,
  },
  buttonstyle:{
    width:60,
    height:60,
  },
  buttontext:{
    justifyContent:'center',
    alignSelf:'center',
    fontFamily:'fontawesome',
    fontSize:60,
    color:'#000',
    
  }

})

export default Button