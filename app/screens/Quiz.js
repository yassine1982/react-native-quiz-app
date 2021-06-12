/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
} from 'react-native';
import { COLORS, SIZES } from '../constants';
import data from '../data/QuizData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// shuffel results array

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const Quiz = ({ route, navigation }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  const { questions } = route.params
  console.log(options)
  useEffect(() => {

    // console.log(questions)
    setOptions(
      questions &&
      handleShuffle([
        questions[currQues]?.correct_answer,
        ...questions[currQues]?.incorrect_answers,
      ])
    );
  }, [route.params, currQues, questions])


  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const validateAnswer = selectedOption => {
    let correct_option = questions[currQues].correct_answer;
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption === correct_option) {
      // Set Score
      setScore(score + 1);
    }
    // Show Next Button
    setShowNextButton(true);
  };

  const handleNext = () => {
    console.log(questions.length - 1); // 4
    if (currQues === questions.length - 1) {
      // Last Question
      // Show Score Modal
      navigation.navigate("Result", { score: score, currQues: currQues })
      // setShowScoreModal(true);
    } else {
      setCurrQues(currQues + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currQues + 1,
      duration: 600,
      useNativeDriver: false,
    }).start();
  };
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrQues(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 50,
      useNativeDriver: false,
    }).start();
  };
  // const getQuiz = async () => {
  //   // setIsLoading(true);
  //   const url =
  //     'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=url3986';
  //   // 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(decodeURIComponent(data.results[0].question));
  //   console.log(decodeURIComponent(data.results[0].correct_answer));
  //   // setQuestions(data.results);
  //   // setQuestions(data.results);
  //   // setOptions(generateOptionsAndShuffle(data.results[0]));
  //   // setIsLoading(false);
  // };
  // useEffect(() => {
  //   getQuiz();
  // }, []);

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 40,
        }}>
        {/* Question Counter */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              opacity: 0.6,
              marginRight: 2,
            }}>
            {currQues + 1}
          </Text>
          <Text style={{ color: COLORS.white, fontSize: 18, opacity: 0.6 }}>
            {/* / {allQuestions.length} */}
            / {questions.length}
          </Text>
        </View>

        {/* Question */}
        <Text
          style={{
            color: COLORS.white,
            fontSize: 30,
          }}>
          {/* {allQuestions[currentQuestionIndex]?.question} */}
          {decodeURIComponent(questions[currQues]?.question)}
        </Text>
      </View>
    );
  };
  const renderOptions = () => {
    return (
      <View>
        {
          options && options.map((option, index) =>
            <TouchableOpacity
              onPress={() => validateAnswer(option)}
              disabled={isOptionsDisabled}
              key={option}
              style={{
                borderWidth: 3,
                borderColor:
                  option === correctOption
                    ? COLORS.success
                    : option === currentOptionSelected
                      ? COLORS.error
                      : COLORS.secondary + '40',
                backgroundColor:
                  option === correctOption
                    ? COLORS.success + '20'
                    : option === currentOptionSelected
                      ? COLORS.error + '20'
                      : COLORS.secondary + '20',
                height: 60,
                borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                marginVertical: 10,
              }}
            >

              <Text style={{ fontSize: 20, color: COLORS.white }}>{index + 1} - {" "} {decodeURIComponent(option)}</Text>
              {/* Show Check Or Cross Icon based on correct answer */}
              {option === correctOption ? (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    backgroundColor: COLORS.success,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="check"
                    style={{
                      color: COLORS.white,
                      fontSize: 20,
                    }}
                  />
                </View>
              ) : option === currentOptionSelected ? (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    backgroundColor: COLORS.error,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="close"
                    style={{
                      color: COLORS.white,
                      fontSize: 20,
                    }}
                  />
                </View>
              ) : null}

            </TouchableOpacity>
          )
        }
        {/* {allQuestions[currentQuestionIndex]?.options.map(option => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={option}
            style={{
              borderWidth: 3,
              borderColor:
                option === correctOption
                  ? COLORS.success
                  : option === currentOptionSelected
                    ? COLORS.error
                    : COLORS.secondary + '40',
              backgroundColor:
                option === correctOption
                  ? COLORS.success + '20'
                  : option === currentOptionSelected
                    ? COLORS.error + '20'
                    : COLORS.secondary + '20',
              height: 60,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginVertical: 10,
            }}>
            <Text style={{ fontSize: 20, color: COLORS.white }}>{option}</Text>

            {/* Show Check Or Cross Icon based on correct answer
            {option === correctOption ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.success,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                />
              </View>
            ) : option == currentOptionSelected ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.error,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="close"
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))} */}
      </View>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20,
            width: '100%',
            backgroundColor: COLORS.accent,
            padding: 20,
            borderRadius: 50,
          }}>
          <Text
            style={{ fontSize: 20, color: COLORS.white, textAlign: 'center', fontWeight: 'bold' }}>
            Next
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const [progress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, questions.length],
    outputRange: ['0%', '100%'],
  });
  console.log(progressAnim)
  const renderProgressBar = () => {
    return (
      <View style={{ marginVertical: 30 }} >
        <Text
          style={{ color: COLORS.white, fontSize: 20, marginLeft: 5, marginVertical: 15, fontWeight: 'bold' }}
        >Progress </Text>
        <View
          style={{
            width: '96%',
            height: 20,
            borderRadius: 20,
            backgroundColor: '#00000020',
            alignSelf: 'center',
          }}>
          <Animated.View
            style={[
              {
                height: 20,
                borderRadius: 20,
                backgroundColor: COLORS.accent,
              },
              {
                width: progressAnim,
              },
            ]}
          />
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          backgroundColor: COLORS.background,
          position: 'relative',
        }}>


        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}
        {/* ProgressBar */}
        {renderProgressBar()}
        {/* Next Button */}
        {renderNextButton()}

        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}>
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.primary,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: COLORS.white,
                width: '90%',
                borderRadius: 20,
                padding: 20,
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                {score > questions.length / 2 ? 'Congratulations!' : 'Oops!'}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    color:
                      score > questions.length / 2
                        ? COLORS.success
                        : COLORS.error,
                  }}>
                  {score}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: COLORS.black,
                  }}>
                  / {questions.length}
                </Text>
              </View>
              {/* Retry Quiz button */}
              <TouchableOpacity
                onPress={restartQuiz}
                style={{
                  backgroundColor: COLORS.accent,
                  padding: 20,
                  width: '100%',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLORS.white,
                    fontSize: 20,
                  }}>
                  Retry Quiz
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Background Image */}
        <Image
          source={require('../assets/images/DottedBG.png')}
          style={{
            width: SIZES.width,
            height: 130,
            zIndex: -1,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0.5,
          }}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};

export default Quiz;
