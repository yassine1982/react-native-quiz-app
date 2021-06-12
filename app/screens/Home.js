/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable no-catch-shadow */
import axios from 'axios';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,

} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { COLORS, SIZES } from '../constants/theme';

const Home = ({ navigation }) => {
  // const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState();
  const [error, setError] = useState(false);
  // const [questions, setQuestions] = useState(null);
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState();

  const fetchQuestions = async (category = '18', difficulty = '') => {
    setLoading(true)
    console.log('app');
    try {

      // const { data } = await axios.get('https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple');
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${18}&difficulty=${difficulty}&type=multiple&encode=url3986`
      );
      console.log(data.results[0].difficulty);
      // setQuestions(data.results);
      const questions = data.results
      setLoading(false)
      navigation.navigate('Quiz', { questions: questions });

    } catch (error) {
      setError(error);
      setLoading(false)

      console.error(error);
    }
  };
  const HandelSelectedItem = (item) => {
    setDifficulty(item);
    console.log(item);
  }

  const handleSubmit = (difficulty) => {
    fetchQuestions(difficulty);

    // console.log('name' + name);
    // console.log('difficulty' + difficulty);
    // if (!difficulty || !name) {
    //   setError(true);
    //   console.log('!difficulty || !name');
    //   return;
    // } else {
    //   setError(false);
    //   // alert('test ok  ');
    //   fetchQuestions(difficulty);
    //   // if (fetchQuestions(difficulty)) {
    //   //   // history.push("/quiz");
    //   // }
    // }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.background} />

      {loading ? <ActivityIndicator size="large" color={COLORS.accent} style={styles.activityIndicator} /> : error ? <Text>Error</Text> :
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Computer</Text>
            <Text style={styles.title}>Quiz</Text>
          </View>
          <ImageBackground
            source={require('../assets/images/img1.png')}
            style={styles.imageComputer}
            resizeMode="contain"
          />
          <Image
            source={require('../assets/images/computer.png')}
            style={styles.imageTop}
            resizeMode="contain"
          />
          <Text style={styles.titleSitting}>Select Difficilty</Text>
          <View style={styles.inputContainer}>
            {/* <TextInput
              style={styles.input}
              placeholder="Enter Your name"
              onChangeText={text => setName(text)}
              value={name}
            /> */}
            <View style={{
              width: '90%',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#bdc3c7',
              overflow: 'hidden',
            }}>
              <Picker
                style={{

                  width: '100%',
                  // height: 20,
                  borderColor: COLORS.white,
                  backgroundColor: COLORS.secondary,
                  borderRadius: 20,
                  color: COLORS.white,
                  // marginBottom: 40,
                }}
                prompt="Select Difficilty"
                numberOfLines={1}
                itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily: "Ebrima", fontSize: 17 }}
                itemTextStyle={{ color: 'red' }}
                dropdownIconColor={COLORS.white}
                selectedValue={difficulty}
                onValueChange={(itemValue, itemIndex) =>
                  HandelSelectedItem(itemValue)
                }>
                {/* <Picker.Item label="Select Difficilty" value="none" enabled={false} /> */}
                <Picker.Item label="Easy" value="easy" />
                <Picker.Item label="Medium" value="medium" />
                <Picker.Item label="Hard" value="hard" />
              </Picker>
            </View>
            {/* <TextInput
              style={styles.input}
              placeholder="Select Difficulty"
              // onChangeText={text => setDifficulty(text)}
              value={difficulty}
            /> */}
          </View>
          <View>
            <TouchableOpacity style={styles.Start} onPress={() => handleSubmit()}>
              <Text style={styles.titleStart}>Start</Text>
            </TouchableOpacity>
          </View>
        </>
      }
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  }, activityIndicator: {
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: "transparent",
    top: SIZES.height / 2,
    left: SIZES.width / 2,

    // marginTop: 400,
  },
  input: {
    width: '90%',
    fontSize: 20,
    color: COLORS.black,
    // borderWidth: 3,
    height: 60,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: COLORS.white,
  },
  title: {
    color: COLORS.white,
    fontSize: 46,
    marginTop: 10,
    fontWeight: '700',
  },
  titleContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    width: '90%',
    // backgroundColor: COLORS.accent,
  },
  inputContainer: {
    height: '20%',
    alignItems: 'center',
    // marginTop: 10,
    justifyContent: 'space-around',
    // backgroundColor: COLORS.primary,
  },
  Start: {
    height: 60,
    width: '90%',
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 70,
    justifyContent: 'center',
    backgroundColor: COLORS.playagain,
  },
  titleStart: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: '700',
  },
  titleSitting: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'flex-start',
    marginLeft: 25,

  },
  imageComputer: {
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: -120,
    left: 0,
  },
  imageTop: {
    alignSelf: 'center',
    height: 350,
    width: 350,
    // backgroundColor: COLORS.primary,
    padding: 0,
    margin: 10,
  },
});
