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

import React, {useEffect, useState} from 'react';
import Home from './screens/Home';
import Notification from './screens/Notification';
import Test from './screens/Test';
import Result from './screens/Result';
import Splash from './screens/Splash';
import {Quiz} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Test from './screens/Test';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <Test />
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{animationEnabled: false, header: () => null}}
        />
        {/* <Stack.Screen name='Test' component={Test} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
