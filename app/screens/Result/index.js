/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */

import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import React, {useEffect} from 'react';
import {COLORS, SHADOW} from '../../constants/theme';
import success from '../../assets/lottie/success.json';
import warning2 from '../../assets/lottie/warning2.json';
import resultImage from '../../assets/images/result.png';
import MessageResult from '../../components/MessageResult';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';
import Sound from 'react-native-sound';
import {styles} from './style';

const Result = ({route, navigation}) => {
  const props = {
    activeStrokeWidth: 10,
    inActiveStrokeWidth: 10,
    inActiveStrokeOpacity: 0.2,
  };
  const {score, currQues, switchvolume} = route.params;
  const numQuestions = currQues + 1; // Total number of questions
  const minScore = numQuestions / 2 - 1; // Minimum score to get next Level
  const sccessProgress = (score * 100) / numQuestions;
  const errorProgress = ((numQuestions - score) * 100) / numQuestions;
  const correctAnswer = score;
  const incorectAnswers = numQuestions - score;

  useEffect(() => {
    // playOops();
    BackHandler.addEventListener('hardwareBackPress', backPressed);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backPressed);
    };
  }, []);

  useEffect(() => {
    if (score > minScore) {
      playCongrat();
    } else {
      playOops();
    }
  }, [score]);

  const backPressed = () => {
    Alert.alert(
      'Exit App',
      'Do you want to exit?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => BackHandler.exitApp()},
      ],
      {cancelable: false},
    );
    return true;
  };

  //Play sound for correct and wrong answers
  const playCongrat = () => {
    const correct = new Sound(
      'congratitulation.mp3',
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          // console.log('failed to load the sound', error);
          return;
        }

        if (switchvolume) {
          correct.play(succes => {
            if (succes) {
              // console.log('successfully finished playing');
            }
          });
        }
      },
    );
    // console.log('correct ', correct);
  };
  const playOops = () => {
    const wrong = new Sound('oops.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        // console.log('failed to load the sound', error);
        return;
      }

      if (switchvolume) {
        wrong.play(sucess => {
          if (sucess) {
            // console.log('successfully finished playing');
          }
        });
      }
    });
  };
  return (
    <LinearGradient
      colors={['#3b5998', COLORS.background, COLORS.primary]}
      style={styles.container}>
      <StatusBar backgroundColor={'#3b5998'} animated={false} />

      <Image source={resultImage} style={styles.imageTop} resizeMode="center" />
      <View style={[styles.inputContainer, SHADOW]}>
        {score > minScore ? (
          <MessageResult
            image={success}
            lottieStyle={styles.imageResult}
            textStyle={[styles.titlecongrate, SHADOW]}
            Message={'Congratulations !'}
          />
        ) : (
          <MessageResult
            image={warning2}
            lottieStyle={styles.imageWarning}
            textStyle={[styles.titlecongrate, {fontSize: 26}]}
            Message={'Oops !'}
          />
        )}
        <Text style={styles.titlecongrate}>
          Score : {score} / {numQuestions}
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View style={{padding: 5}}>
            <CircularProgressBase
              {...props}
              value={sccessProgress}
              radius={40}
              activeStrokeColor={COLORS.success}
              inActiveStrokeColor={COLORS.success}>
              <CircularProgressBase
                {...props}
                value={errorProgress}
                radius={30}
                activeStrokeColor={COLORS.error}
                inActiveStrokeColor={COLORS.error}
              />
            </CircularProgressBase>
          </View>
          <View style={{padding: 5}}>
            <Text style={styles.correctanswer}>
              Correct answers : {correctAnswer}
            </Text>
            <Text style={styles.incorrectanswer}>
              Incorrect answers : {incorectAnswers}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[styles.Start, SHADOW]}>
          <Text style={styles.titleStart}>
            {score > minScore ? 'Try Next Level' : 'Retry Quiz'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={backPressed}
          style={[
            styles.Start,
            SHADOW,
            {backgroundColor: COLORS.error, width: '20%'},
          ]}>
          <Text style={styles.titleExit}>Exit</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Result;
