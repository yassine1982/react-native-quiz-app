/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, SHADOW} from '../constants/theme';
import success from '../assets/lottie/success.json';
import warning2 from '../assets/lottie/warning2.json';
import MessageResult from '../components/MessageResult';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';
import Sound from 'react-native-sound';

const Result = ({route, navigation}) => {
  const props = {
    activeStrokeWidth: 12,
    inActiveStrokeWidth: 10,
    inActiveStrokeOpacity: 0.2,
  };
  const {score, currQues, switchvolume} = route.params;
  // const score = 10;
  // const currQues = 10;
  useEffect(() => {
    // playOops();
    BackHandler.addEventListener('hardwareBackPress', backPressed);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backPressed);
    };
  }, []);

  useEffect(() => {
    if (score > 4) {
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
          correct.play(success => {
            if (success) {
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
        wrong.play(success => {
          if (success) {
            // console.log('successfully finished playing');
          }
        });
      }
    });
    // console.log('wrong ', wrong);
    // setMusic(wrong);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.background} />
      <Image
        source={require('../assets/images/result.png')}
        style={styles.imageTop}
        resizeMode="contain"
      />

      {/* <Text style={styles.titlecongrate}>Hard Luck !</Text> */}

      <View style={[styles.inputContainer, SHADOW]}>
        {score > 4 ? (
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
          Score : {score} / {currQues + 1}
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
              value={score * 10}
              radius={40}
              activeStrokeColor={COLORS.success}
              inActiveStrokeColor={COLORS.success}>
              <CircularProgressBase
                {...props}
                value={(currQues + 1 - score) * 10}
                radius={30}
                activeStrokeColor={COLORS.error}
                inActiveStrokeColor={COLORS.error}
              />
            </CircularProgressBase>
          </View>
          <View style={{padding: 5}}>
            <Text style={styles.correctanswer}>Correct answers : {score}</Text>
            <Text style={styles.incorrectanswer}>
              Incorrect answers : {currQues + 1 - score}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[styles.Start, SHADOW]}>
          <Text style={styles.titleStart}>Try Next Level</Text>
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
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  titleContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    width: '90%',
    backgroundColor: COLORS.accent,
  },
  inputContainer: {
    height: '50%',
    alignItems: 'center',
    marginHorizontal: 15,
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    paddingVertical: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.accent,
  },
  Start: {
    height: 42,
    width: '70%',
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    // marginTop: SIZES.height / 16,
    justifyContent: 'center',
    backgroundColor: COLORS.playagain,
  },
  titleStart: {
    color: COLORS.white,
    fontSize: 22,
    fontFamily: 'ComicNeue-BoldItalic',
  },
  titleExit: {
    color: COLORS.white,
    fontSize: 22,
    fontFamily: 'ComicNeue-BoldItalic',
  },
  titlecongrate: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '700',
    alignSelf: 'center',
  },

  imageTop: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    borderRadius: 100,
    // backgroundColor: COLORS.primary,
    padding: 0,
    // margin: 10,
  },
  imageWarning: {
    alignSelf: 'center',
    height: 120,
    width: 120,
    // backgroundColor: COLORS.playagain,
    // marginTop: -10,
    padding: 0,
  },
  imageResult: {
    // backgroundColor: COLORS.playagain,
    alignSelf: 'center',
    height: 120,
    width: 120,
    padding: 0,
    // marginTop: -10,
  },
  correctanswer: {
    color: COLORS.success,
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
  },
  incorrectanswer: {
    color: COLORS.error,
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
  },
});
