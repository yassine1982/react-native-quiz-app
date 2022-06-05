/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert, BackHandler} from 'react-native';

export default function cancelPressButtonHooks(
  exitMessage,
  messageBody,
  exitOption = false,
) {
  const navigation = useNavigation();
  const onBackPressHandler = () => {
    Alert.alert(
      exitMessage,
      messageBody,
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            if (exitOption) {
              BackHandler.exitApp();
            } else {
              navigation.navigate('Home');
            }
          },
        },
      ],
      {cancelable: true},
    );
    return true;
  };
  //Exit The QuizApplication
  useFocusEffect(
    React.useCallback(() => {
      const OnBackPress = () => {
        onBackPressHandler();
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener('hardwareBackPress', OnBackPress);

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener('hardwareBackPress', OnBackPress);
      };
    }),
  );
}
