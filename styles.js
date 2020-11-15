import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
const styles = StyleSheet.create({
    background: {
    backgroundColor:'white',
    flex: 1,
    
  },
  titleStart:{
      height:140
  },
  ingredient:{
    marginRight:30,
    marginLeft:30,
    marginBottom:70,
    paddingTop:10,
    paddingBottom:10,
    borderRadius:10,
    backgroundColor:'rgba(0,0,0,0.4)',
 },
 ingredientText:{
   fontSize:25,
   textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    color:'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
    
    
 },
 titleText:{
  color:'white',
  fontSize:40,
  textAlign: 'center', // <-- the magic
   fontWeight: 'bold',
   marginTop: 40 ,
   textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
},
ingredientPicture:{
  flex : 1,
    width : '100%',
    height: '100%',
},
accordian:{
  },
//Choosen food
foodObject:{
  backgroundColor:'rgba(0,0,0,0.4)',
},
choosenFoodStart:{
  height:110,
},
choosenFood:{
  color:'white',
  fontSize:40,
  marginTop: 40,
  textAlign: 'center', // <-- the magic
   fontWeight: 'bold',
   textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
      
},
choosenFoodText:{
  fontSize:25,
  textAlign: 'center', // <-- the magic
   fontWeight: 'bold', 
   color:'white',
   textShadowColor: 'rgba(0, 0, 0, 0.75)',
     textShadowOffset: {width: -1, height: 1},
     textShadowRadius: 10
},
choosenFoodInfoText:{
  fontSize:15,
  paddingTop:10,
  paddingLeft:20,
  paddingRight:20,
   color:'white',
   textShadowColor: 'rgba(0, 0, 0, 0.75)',
     textShadowOffset: {width: -1, height: 1},
     textShadowRadius: 10
},
choosenFoodInstruction:{
  fontSize:15,
  paddingLeft:20,
  paddingRight:20,
  paddingTop:10,
  paddingBottom:20,
   color:'white',
   textShadowColor: 'rgba(0, 0, 0, 0.75)',
     textShadowOffset: {width: -1, height: 1},
     textShadowRadius: 10
},
listOfChoosenFood:{
  flex:1,
  backgroundColor: 'white'
},

});
export default styles;