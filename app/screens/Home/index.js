/* eslint-disable prettier/prettier */
/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable no-catch-shadow */

import React, {useState, useEffect} from 'react';
import {
  Switch,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  Platform,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {COLORS, SIZES, SHADOW, FONTS} from '../../constants/theme';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NetInfo from '@react-native-community/netinfo';
import LinearGradient from 'react-native-linear-gradient';
import img1 from '../../assets/images/img1.png';
import computer from '../../assets/images/computer.png';
import EN from '../../data/EN.json';
import FR from '../../data/FR.json';
import NAT from '../../data/NAT.json';

const Home = ({navigation}) => {
  const [difficulty, setDifficulty] = useState();
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [validName, setValidName] = useState('');
  const [loading, setLoading] = useState();
  const [showModal, setShowModal] = useState(false);
  const [easy] = useState('easy');
  const [medium] = useState('medium');
  const [hard] = useState('hard');
  const [connection, setConnection] = useState(false);
  const [switchLanguage, setSwitchLanguage] = useState(true);
  const [switchvolume, setSwitchvolume] = useState(true);

  //handle Network Connection Events

  const fetchQuestions = async questions => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      //go To Quiz Screen with props
      navigation.navigate('Quiz', {
        questions: questions,
        name: validName,
        difficulty: difficulty,
        _levelstart: _levelstart,
        switchvolume: switchvolume,
      });
    }, 500);
  };

  const HandelSelectedItem = item => {
    setDifficulty(item);
  };
  const handelName = () => {
    //logic for controling Nmae property
    if (name.length > 10) {
      Alert.alert('Max Chars For Name Is 10 ');
      return;
    }
    if (name.length < 3 || name.trim() === '') {
      Alert.alert('Min Chars For Name Is 3 ');
      return;
    } else {
      //Set valid  name in the state
      setValidName(name);
      //store Data to LocalStorage
      storeData(name);
    }
    return true;
  };

  const handleSubmit = diff => {
    // _checkConnection();
    if (!diff) {
      // setError(true);
      // showing Toast

      toastWithDurationHandler('Please choose difficulty !');
      return;
    } else if (validName === '') {
      // setError(true);
      toastWithDurationHandler('Please Chose Name !');
      return;
    }
    // console.log(FR[difficulty][0].difficulty);
    switchLanguage
      ? // ? fetchQuestions(EN[difficulty])
        fetchQuestions(NAT[difficulty])
      : fetchQuestions(FR[difficulty]);
  };

  const storeData = async value => {
    try {
      // const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@name', value);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  //clear data cache
  const clearData = () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        // const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('@name', '');
        await AsyncStorage.setItem('@start', '0');
        setLevelStart(0);
        setDifficulty('');
        setName('');
        setValidName('');
      } catch (e) {
        // saving error
        console.log(e);
      }
      setLoading(false);
    }, 200);
  };
  //confirm reset settings
  const clearDataConfirm = () => {
    Alert.alert(
      'Reset Setting',
      'Do you want to reset setting and levels?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => clearData()},
      ],
      {cancelable: false},
    );
    return true;
  };
  const [_levelstart, setLevelStart] = useState(0);

  const _getLevelStart = async () => {
    try {
      // const jsonValue = JSON.stringify(value);
      const level = await AsyncStorage.getItem('@start');
      if (level === null || level.length === 0) {
        console.log('inside level === null');
        return;
      }
      setLevelStart(parseInt(level));
      console.log(_levelstart);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  // check connction and
  const _checkConnection = () => {
    // setLoading(true);
    const unsubscribe = NetInfo.addEventListener(state => {
      // console.log('Connection type', state.type);
      // console.log('Is connected?', state.isConnected);

      if (state.isConnected) {
        setConnection(true);
        return;
      }

      setConnection(false);
    });
    // setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    _getLevelStart();
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      console.log('focused');
      _getLevelStart();
    });

    setTimeout(async () => {
      try {
        const storedData = await AsyncStorage.getItem('@name');
        if (storedData != null) {
          // const data = JSON.parse(storedData);
          setValidName(storedData);
          // setLoading(false);
          // console.log('Dans setTimeout Name : ', storedData);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }, 20);
    return unsubscribe;
  }, [validName, connection, _levelstart, navigation]);

  // Function To make Toast with Custome Message
  const toastWithDurationHandler = message => {
    // To make Toast with duration
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const thumbColorOn = Platform.OS === 'android' ? COLORS.accent : '#f3f3f3';
  const thumbColorOff = Platform.OS === 'android' ? '#f04141' : '#f3f3f3';
  const trackColorOn = Platform.OS === 'android' ? '#98e7f0' : '#0cd1e8';
  const trackColorOff = Platform.OS === 'android' ? '#f3adad' : '#f04141';
  return (
    <LinearGradient
      colors={['#3b5998', COLORS.background, COLORS.primary]}
      style={styles.container}>
      <StatusBar backgroundColor={'#3b5998'} animated={true} />
      {error && <Text>{error}</Text>}

      {loading && <Loader />}
      <>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Computer</Text>
          <Text style={styles.title}>Quiz</Text>
        </View>
        <Image source={img1} style={styles.imageTop} resizeMode="contain" />
        <Image
          source={computer}
          style={styles.imageComputer}
          resizeMode="contain"
        />

        {validName !== '' ? (
          <Text
            style={{
              color: COLORS.orange,
              // backgroundColor: COLORS.accent,
              padding: 5,
              alignSelf: 'center',
              // fontWeight: 'bold',
              fontSize: 20,
              fontFamily: FONTS.comicItalic,
            }}>
            Hi, {validName}
          </Text>
        ) : null}
        {/* <Text style={styles.titleSitting}>Select Difficulty</Text> */}
        <View style={[styles.inputContainer, SHADOW]}>
          <View style={styles.PickerContainer}>
            <Picker
              style={[styles.Picker, SHADOW]}
              prompt="Select Quiz Difficulty"
              numberOfLines={1}
              dropdownIconColor={COLORS.white}
              selectedValue={difficulty}
              onValueChange={(itemValue, itemIndex) =>
                HandelSelectedItem(itemValue)
              }>
              <Picker.Item label="Select Difficulty" />
              <Picker.Item label="Easy" value={easy} />
              <Picker.Item label="Medium" value={medium} />
              <Picker.Item label="Hard" value={hard} />
            </Picker>
          </View>
        </View>
        <View>
          {!validName && !loading && (
            <TextInput
              style={[
                styles.Start,
                {backgroundColor: COLORS.gray, paddingHorizontal: 10},
                SHADOW,
              ]}
              placeholder="Enter Your Name"
              value={name}
              onChangeText={value => setName(value)}
              onSubmitEditing={handelName}
            />
          )}
          {/* <Text>{validName}</Text> */}

          <TouchableOpacity onPress={() => handleSubmit(difficulty)}>
            <LinearGradient
              // colors={['#4c669f', '#3b5998', '#192f6a']}
              // colors={['#db91d0', '#d959c6', '#d921bd']}
              colors={['#CD58A2', '#CD58C2']}
              style={[
                styles.Start,
                SHADOW,
                {flexDirection: 'row', justifyContent: 'center'},
              ]}>
              <Text style={styles.titleStart}>Start</Text>
              <Feather name="play" size={25} color="white" />
            </LinearGradient>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '90%',
              alignSelf: 'center',
              marginTop: 40,
            }}>
            <TouchableOpacity
              style={[
                styles.Start,
                {
                  backgroundColor: COLORS.background,
                  width: '30%',
                  height: 38,
                },
                SHADOW,
                {flexDirection: 'row', justifyContent: 'space-around'},
              ]}
              onPress={() => clearDataConfirm()}>
              <Feather name="menu" size={18} color="white" />
              <Text style={[styles.titleStart, {fontSize: 18}]}>Reset</Text>
            </TouchableOpacity>
            <View
              style={[
                styles.Start,
                {
                  backgroundColor: COLORS.background,
                  width: '25%',
                  height: 38,
                  // marginTop: '5%',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                },
                SHADOW,
              ]}

              // padding: 2,
            >
              <Switch
                styles={{backgroundColor: COLORS.dark}}
                onValueChange={() => {
                  setSwitchLanguage(switchLanguage => !switchLanguage);
                  switchLanguage
                    ? toastWithDurationHandler(
                        'Quiz question in french language',
                      )
                    : toastWithDurationHandler(
                        'Quiz question in english language',
                      );
                }}
                value={switchLanguage}
                thumbColor={switchLanguage ? thumbColorOn : thumbColorOff}
                trackColor={{false: trackColorOff, true: trackColorOn}}
                ios_backgroundColor={trackColorOff}
              />
              <Text
                style={{
                  justifyContent: 'center',
                  // backgroundColor: 'blue',
                  alignSelf: 'center',
                  fontSize: 16,
                  color: COLORS.white,
                  paddingRight: 4,
                }}>
                {switchLanguage ? 'EN' : 'FR'}
              </Text>
            </View>
            <View
              style={[
                styles.Start,
                {
                  backgroundColor: COLORS.background,
                  width: '30%',
                  height: 38,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  paddingHorizontal: 4,
                },
                SHADOW,
              ]}

              // padding: 2,
            >
              <Switch
                styles={{backgroundColor: COLORS.dark}}
                onValueChange={() => {
                  setSwitchvolume(switchvolume => !switchvolume);
                  !switchvolume
                    ? toastWithDurationHandler('sound On')
                    : toastWithDurationHandler('Sound Off');
                }}
                value={switchvolume}
                thumbColor={switchvolume ? thumbColorOn : thumbColorOff}
                trackColor={{false: trackColorOff, true: trackColorOn}}
                ios_backgroundColor={trackColorOff}
              />
              <Text
                style={{
                  justifyContent: 'center',
                  // backgroundColor: 'blue',
                  alignSelf: 'center',
                  fontSize: 14,
                  color: COLORS.white,
                }}>
                {switchvolume ? (
                  <Ionicons
                    name="volume-high-outline"
                    size={22}
                    color={COLORS.white}
                  />
                ) : (
                  <Ionicons
                    name="volume-mute-outline"
                    size={22}
                    color={COLORS.orange}
                  />
                )}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.Start,
              {
                backgroundColor: COLORS.background,
                width: '35%',
                height: 38,
                marginTop: '5%',
              },
              SHADOW,
            ]}
            onPress={() => setShowModal(true)}>
            <Text style={[styles.titleStart, {fontSize: 16}]}>About Us !</Text>
          </TouchableOpacity>
        </View>
      </>
      {/* Modal About Us */}
      <Modal
        showModal={showModal}
        COLORS={COLORS}
        setShowModal={setShowModal}
      />
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  PickerContainer: {
    width: '90%',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    overflow: 'hidden',
  },
  Picker: {
    width: '100%',
    height: 42,
    borderColor: COLORS.white,
    backgroundColor: COLORS.secondary,
    // borderRadius: 50,
    color: COLORS.white,
    // marginBottom: 40,
  },
  activityIndicator: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: SIZES.height / 2,
    left: SIZES.width / 2,
    zIndex: 100,

    // marginTop: 400,
  },
  input: {
    width: '90%',
    fontSize: 20,
    color: COLORS.black,
    // borderWidth: 3,
    height: 42,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: COLORS.white,
  },
  title: {
    color: COLORS.orange,
    fontSize: 35,
    // marginTop: 10,
    // fontWeight: '700',
    fontFamily: FONTS.comicItalic,
    // width: '100%',
    // backgroundColor: 'red',
  },
  titleContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    // borderRadius: 20,
    width: '90%',
    // backgroundColor: COLORS.accent,
    zIndex: 100,
    marginTop: 30,
  },
  inputContainer: {
    // height: '20%',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-around',
    elevation: 8,
    // backgroundColor: COLORS.primary,
  },
  Start: {
    height: 42,
    width: '85%',
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    // backgroundColor: COLORS.playagain,
    borderWidth: 1,
    borderColor: COLORS.playagain,
  },
  titleStart: {
    marginRight: 10,
    color: COLORS.white,
    fontSize: 30,
    // fontWeight: '700',
    fontFamily: 'ComicNeue-BoldItalic',
  },
  titleSitting: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
  imageComputer: {
    alignSelf: 'center',
    height: 250,
    width: 250,
    // backgroundColor: COLORS.primary,
    padding: 0,
  },
  imageTop: {
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: -110,
    left: 0,
    right: 0,
  },
});
