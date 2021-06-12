/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants/theme';

const Result = ({ route, navigation }) => {
  const { score, currQues } = route.params
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.background} />

      {/* <View style={styles.titleContainer}>
        <Text style={styles.title}>Computer</Text>
        <Text style={styles.title}>Quiz</Text>
      </View> */}
      <Image
        source={require('../assets/images/result.png')}
        style={styles.imageTop}
        resizeMode="contain"
      />
      <ImageBackground
        source={require('../assets/images/img1.png')}
        style={styles.imageComputer}
        resizeMode="contain"
      />

      {/* <Text style={styles.titlecongrate}>Hard Luck !</Text> */}

      <View style={styles.inputContainer}>
        <Text style={styles.titlecongrate}>{score > 4 ? 'Congratulations !' : 'Oops!'} </Text>
        <Text style={styles.titlecongrate}>Score : {score} / {currQues + 1}</Text>
        <Text style={styles.correctanswer}>Correct answers : {score}</Text>

        <Text style={styles.incorrectanswer}>Incorrect answers : {(currQues - score) + 1}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.Start}>
          <Text style={styles.titleStart}>Play again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    // width: '100%',
    // justifyContent: 'center',
    backgroundColor: COLORS.background,
  },

  title: {
    color: COLORS.white,
    fontSize: 50,
    fontWeight: '700',
  },
  titleContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    width: '90%',
    backgroundColor: COLORS.accent,
  },
  inputContainer: {
    height: '30%',
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
    height: 60,
    width: '90%',
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: SIZES.height / 6,
    justifyContent: 'center',
    backgroundColor: COLORS.playagain,
  },
  titleStart: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: '700',
  },
  titlecongrate: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: '700',
    alignSelf: 'center',
  },
  imageComputer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    // height: '100%',
    // width: '100%',
  },
  imageTop: {
    alignSelf: 'center',
    height: 350,
    width: 350,
    // backgroundColor: COLORS.primary,
    padding: 0,
    margin: 10,
  },
  correctanswer: {
    color: COLORS.success,
    fontSize: 26,
    fontWeight: '500',
    alignSelf: 'center',
  },
  incorrectanswer: {
    color: COLORS.error,
    fontSize: 26,
    fontWeight: '500',
    alignSelf: 'center',
  },
});
