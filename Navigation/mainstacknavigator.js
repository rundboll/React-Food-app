import 'react-native-gesture-handler';
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StartPage from '../Components/startpage'
import FoodPage from '../Components/food'
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator()
function MainStackNavigator() {
  
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerTransparent:true,
      headerTitle: false,
      headerBackTitleStyle:{
        color:'white',
        height:25,
      },
      headerStyle:{
        backgroundColor:'white',
      },
      headerTintColor:'white'
      
    }} 
    initialRouteName='StartPage'>
        <Stack.Screen name='StartPage' component={StartPage}/>
        <Stack.Screen name='Food' component={FoodPage}/>
      </Stack.Navigator>
  )
}
export default MainStackNavigator