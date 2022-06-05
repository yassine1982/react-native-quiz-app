/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Platform,
  Linking,
  Share,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SHADOW, SIZES} from '../../constants';
import LottieView from 'lottie-react-native';
import like from '../../assets/lottie/like.json';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';

const GOOGLE_PACKAGE_NAME = 'agrawal.trial.yourfeedback';
const APPLE_STORE_ID = 'id284882215';

const Notification = ({navigation}) => {
  const {t} = useTranslation();
  const openStore = () => {
    //This is the main trick
    if (Platform.OS !== 'ios') {
      Linking.openURL(`market://details?id=${GOOGLE_PACKAGE_NAME}`).catch(err =>
        alert('Please check for Google Play Store'),
      );
    } else {
      Linking.openURL(
        `itms://itunes.apple.com/in/app/apple-store/${APPLE_STORE_ID}`,
      ).catch(err => alert('Please check for the App Store'));
    }
  };

  // Share the app with Google Play Store
  const shareMessage = () => {
    //Here is the Share API
    Share.share({
      message: 'My App Store To Share With Google Play Store',
      // message: inputValue.toString(),
    })
      //after successful share return result
      .then(result => console.log(result))
      //If any thing goes wrong it comes here
      .catch(errorMsg => console.log(errorMsg));
  };
  return (
    <LinearGradient
      // colors={['#4c669f', '#3b5998', '#192f6a']}
      // colors={['#db91d0', '#d959c6', '#d921bd']}
      colors={['#79DAE8', '#30AADF', '#3498db']}
      style={styles.container}>
      <StatusBar backgroundColor={COLORS.statusBar} animated={false} />

      <View
        style={[
          {
            width: '99%',
            // marginBottom: 5,
            backgroundColor: COLORS.accent,
            borderRadius: 5,
            // padding: 10,
            // alignItems: 'center',
            // alignSelf: 'center',
            // flexDirection: 'row',
            justifyContent: 'center',
            height: 60,
            marginTop: 1,
          },
          SHADOW,
        ]}>
        {/* Hello s*/}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // backgroundColor: 'red',
            width: '100%',
            height: 60,
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity
            style={[
              styles.btn,
              {marginTop: 0, paddingHorizontal: 8, borderRadius: 20},
              SHADOW,
            ]}
            onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={25} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: FONTS.comicItalic,
              color: COLORS.white,
              fontSize: 24,
              // opacity: 0.8,
            }}>
            Notifications
          </Text>
        </View>
      </View>

      <View style={[styles.CardContainer, SHADOW]}>
        <Text style={{fontSize: 18, color: 'white'}}>
          {t('notificationText')}
        </Text>
        <View
          style={{
            position: 'absolute',
            width: '30%',
            height: '30%',
            // backgroundColor: 'red',
            top: 100,
            right: SIZES.width / 3,
            // top: SIZES.height / 5,
            // right: SIZES.width / 10,
          }}>
          <LottieView source={like} autoPlay loop={true} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'flex-end',
            justifyContent: 'space-evenly',
            // backgroundColor: 'red',
            width: '105%',
            marginHorizontal: 10,
          }}>
          <TouchableOpacity
            style={[styles.btn, SHADOW, {paddingHorizontal: 8}]}
            onPress={() => openStore()}>
            <Feather name="star" size={25} color="white" />
            <Text
              style={{
                color: COLORS.white,
                fontSize: 20,
                fontFamily: FONTS.comicItalic,
              }}>
              Rate App
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, SHADOW, {paddingHorizontal: 8}]}
            // onPress={() => navigation.goBack()}>
            onPress={() => shareMessage()}>
            <Feather name="share-2" size={25} color="white" />
            <Text
              style={{
                color: COLORS.white,
                fontSize: 20,
                fontFamily: FONTS.comicItalic,
              }}>
              Share App
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  CardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '96%',
    height: SIZES.height / 3,
    backgroundColor: COLORS.accent,
    padding: 10,
    borderRadius: 5,
    marginTop: SIZES.width / 2,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: COLORS.playagain,
    height: 42,
    // width: SIZES.width / 3,
    marginTop: SIZES.width / 4,
    borderRadius: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: 4,
  },
});
