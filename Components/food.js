import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, Text,Switch, ActivityIndicator,ImageBackground } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from '../styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Accordion from 'react-native-collapsible/Accordion';


function Food({route,navigation}) {
  const { foodType } = route.params;

  const [activeSections, setActiveSections] = useState([]);
  const setSections = (sections) => {
    setActiveSections(
      sections.includes(undefined) ? [] : sections
    );
  };
  const [isLoading, setLoading] = useState(true);
  const [foodTypes, setFood] = useState([]);
    useFocusEffect(
      React.useCallback(() => {
    if (isLoading == true) {
        fetch('http://jodata.se/FoodTemp/Api/foodList?foodName='+foodType+'&appKey=GreenDiamondSlope')
        .then(response=> response.json())
        .then(data => {
            console.log(data)
            setLoading(false);
            setFood(data)
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [])
  )
  
  const renderTitle = (section, _, isActive) => {
    return(
    <View style={styles.foodObject}>
      <Text style={styles.choosenFoodText}>{section.Name}</Text>
      </View>
     ); 
    };

  const renderContent = (section, _, isActive) => {
    return(
    <View style={styles.foodObject}>
      
     
      {section.OvenTemperature != null ?
     <Text style={styles.choosenFoodInfoText}>Oven temperature: {section.OvenTemperature}</Text>
      :
      <View/>
      }
      {section.FoodTemperature != null ?
      <Text style={styles.choosenFoodInfoText}>Food temperature: {section.FoodTemperature}</Text>
      :
      <View/>
      }
      {section.FoodTemperature != null ?
      <Text style={styles.choosenFoodInfoText}>Take out from oven at: {section.FoodTemperature}</Text>
      :
      <View/>
      }
      {section.Instruction != null ?
      <Text style={styles.choosenFoodInstruction}>{section.Instruction}</Text>
      :
      <View/>
      }
      </View>
    );
    };
  
  return (

    <View style={styles.background}>  
     <ImageBackground style={styles.ingredientPicture} source={require('../Pictures/foodbg.jpg')}>
  <View style={styles.choosenFoodStart}><Text style={styles.choosenFood}>{foodType}</Text></View>
    <ScrollView>
      <Accordion
        style={styles.accordian}
        activeSections={activeSections}
        sections={foodTypes}
        touchableComponent={TouchableOpacity}
        renderHeader={renderTitle}
        renderContent={renderContent}
        duration={400}
        onChange={setSections}
      >
      </Accordion>
      </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default Food;


