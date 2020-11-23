import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import styled from 'styled-components';

// Screens
import {Home, ItemDetail} from './screens/';

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border: 'transparent',
  }
};

const Stack = createStackNavigator();


function App(){
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>

       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name='ItemDetail' component={ItemDetail} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
