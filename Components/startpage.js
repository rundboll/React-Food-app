import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { StatusBar, SafeAreaView, View, FlatList, Text, ActivityIndicator, TouchableWithoutFeedback, Image, ImageBackground } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from '../styles';
import { ScrollView } from 'react-native-gesture-handler';

function startpage({ navigation }) {
  return (
    <View style={styles.background}>
      <ImageBackground style={styles.ingredientPicture} source={require('../Pictures/startbg.jpg')}>
        
       <View style={styles.titleStart}><Text style={styles.titleText}>Food Temp</Text></View>
       <ScrollView>
         <TouchableWithoutFeedback onPress={() => navigation.navigate('Food', {foodType: "Lamb"})}>
         <View style={styles.ingredient}><Text style={styles.ingredientText}>Lamb</Text></View>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback onPress={() => navigation.navigate('Food', {foodType: "Beef"})}>
         <View style={styles.ingredient}><Text style={styles.ingredientText}>Beef</Text></View>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback onPress={() => navigation.navigate('Food', {foodType: "Pork"})}>
         <View style={styles.ingredient}><Text style={styles.ingredientText}>Pork</Text></View>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback onPress={() => navigation.navigate('Food', {foodType: "Chicken"})}>
         <View style={styles.ingredient}><Text style={styles.ingredientText}>Chicken</Text></View>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback onPress={() => navigation.navigate('Food', {foodType: "Fish"})}>
         <View style={styles.ingredient}><Text style={styles.ingredientText}>Fish</Text></View>
         </TouchableWithoutFeedback>
         </ScrollView>
         </ImageBackground>
    </View>
  );
}
export default startpage