/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-no-undef */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './screens/Home';
import Result from './screens/Result';
import { Quiz } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name='Result' component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />
    // <Quiz />
  );
};

export default App;
