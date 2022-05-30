/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Animated,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS} from '../../constants';
import RenderQuestion from '../../components/RenderQuestion';
import RenderOptions from '../../components/RenderOptions';
import RenderNextButton from '../../components/RenderNextButton';
import QuizBackgroundImage from '../../components/QuizBackgroundImage';
import Hello from '../../components/Hello';
import CircularProgress from 'react-native-circular-progress-indicator';
import Sound from 'react-native-sound';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './style';
// shuffel results array

const Quiz = ({route, navigation}) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  const {questions, name, difficulty, _levelstart, switchvolume} = route.params;
  const progressValue = ((currQues + 1) * 100) / questions.length;
  console.log(progressValue);
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ]),
    );
  }, [route.params, currQues, questions]);

  // const [val, setVal] = useState(0);

  const handleShuffle = _options => {
    return _options.sort(() => Math.random() - 0.5);
  };
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);

  const validateAnswer = selectedOption => {
    let correct_option = questions[currQues].correct_answer;
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption === correct_option) {
      // Set Score
      setScore(score + 1);
      playCorrect();
    } else {
      playWrong();
    }

    //Increment Progress Value by 10
    // setVal(val + 10);
    // Show Next Button
    setShowNextButton(true);
  };

  // handleLevel change
  const handleLevel = (diff, scor) => {
    if (diff === 'hard' && scor > 4) {
      return 3;
    }
    if (diff === 'medium' && scor > 4) {
      return 2;
    }
    if (diff === 'easy' && scor > 4) {
      return 1;
    }
  };
  //handel Next Button and level start
  const handleNext = () => {
    // console.log(parseInt(_levelstart));
    // console.log(questions.length - 1); // 4
    if (currQues === questions.length - 1) {
      // Last Question
      // Show Result Score
      const _test = handleLevel(difficulty, score);
      // console.log('_test : ', _test);
      // console.log('_levelstart : ', _levelstart);
      if (_test > _levelstart) {
        setTimeout(async () => {
          try {
            // const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(
              '@start',
              handleLevel(difficulty, score).toString(),
            );
          } catch (e) {
            // saving error
            console.log(e);
          }
          navigation.navigate('Result', {
            score: score,
            currQues: currQues,
            switchvolume: switchvolume,
          });
        }, 50);
        return;
      }
      navigation.navigate('Result', {
        score: score,
        currQues: currQues,
        switchvolume: switchvolume,
      });

      // setShowScoreModal(true);
    } else {
      setCurrQues(currQues + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
  };

  //Play sound for correct and wrong answers
  const playCorrect = () => {
    const correct = new Sound('correct.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      if (switchvolume) {
        correct.play(success => {
          if (success) {
            // console.log('successfully finished playing');
          }
        });
      }
    });
  };
  const playWrong = () => {
    const wrong = new Sound('wrong.mp3', Sound.MAIN_BUNDLE, error => {
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
    <LinearGradient
      colors={['#3b5998', COLORS.background, COLORS.primary]}
      style={styles.container}>
      <StatusBar backgroundColor={'#3b5998'} animated={false} />
      {/* Hello World */}
      <Hello
        name={name}
        difficulty={difficulty}
        score={score}
        _levelstart={_levelstart}
      />

      {/* Question */}
      <RenderQuestion currQues={currQues} questions={questions} />

      {/* Options */}
      <RenderOptions
        options={options}
        isOptionsDisabled={isOptionsDisabled}
        validateAnswer={validateAnswer}
        currentOptionSelected={currentOptionSelected}
        correctOption={correctOption}
      />
      {/* ProgressBar */}
      <View style={styles.ProgressContainer}>
        <CircularProgress
          value={progressValue}
          radius={50}
          duration={200}
          progressValueColor={'#ecf0f1'}
          maxValue={100}
          valueSuffix={' %'}
          inActiveStrokeWidth={9}
          inActiveStrokeColor="#2ecc71"
          inActiveStrokeOpacity={0.2}
          titleColor={'white'}
          titleStyle={{fontWeight: 'bold', fontSize: 17, padding: 2}}
          // onAnimationComplete={() => console.log('')}
        />
        {/* code wifi ocp omnisport24586eee */}
      </View>
      {/* Next Button */}
      <RenderNextButton
        showNextButton={showNextButton}
        handleNext={handleNext}
      />
      {/* Background Image if zIndex = -XXX => no image will be displayed */}
      <QuizBackgroundImage />
    </LinearGradient>
  );
};

export default Quiz;
