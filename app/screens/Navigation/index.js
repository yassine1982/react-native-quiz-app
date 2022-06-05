/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-no-undef */
/**
 * Sample React Native Navigation
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Notification from '../Notification';
// import Test from './screens/Test';

import Splash from '../Splash';
import Home from '../Home';
import Quiz from '../Quiz';
import RatingApp from '../RatingApp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Result from '../Result';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// import Test from './screens/Test';

// const rootReducer = combineReducers({
//   counter: counterReducer
// });

// const store = createStore(rootReducer);
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    // <Test />
    // <RatingApp />
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
