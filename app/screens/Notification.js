/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SHADOW, SIZES} from '../constants';
import LottieView from 'lottie-react-native';
import like from '../assets/lottie/like.json';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const Notification = ({navigation}) => {
  return (
    <LinearGradient
      // colors={['#4c669f', '#3b5998', '#192f6a']}
      // colors={['#db91d0', '#d959c6', '#d921bd']}
      colors={['#79DAE8', '#30AADF', '#3498db']}
      style={styles.container}>
      <View
        style={[
          {
            width: '99%',
            marginBottom: 5,
            backgroundColor: COLORS.accent,
            borderRadius: 5,
            padding: 10,
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            height: 60,
            marginTop: 1,
          },
          SHADOW,
        ]}>
        {/* Hello s*/}

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
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
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
        </Text>
        <View
          style={{
            position: 'absolute',
            width: '30%',
            height: '30%',
            // backgroundColor: 'red',
            top: SIZES.width / 3,
            right: SIZES.width / 4,
          }}>
          <LottieView source={like} autoPlay loop={true} />
        </View>
        <TouchableOpacity
          style={[styles.btn, SHADOW]}
          onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} color="white" />
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontFamily: FONTS.comicItalic,
            }}>
            Go Back
          </Text>
        </TouchableOpacity>
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
    width: '90%',
    backgroundColor: COLORS.accent,
    padding: 10,
    borderRadius: 5,
    marginTop: SIZES.width / 2,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: COLORS.playagain,
    height: 42,
    width: SIZES.width / 3,
    marginTop: SIZES.width / 6,
    borderRadius: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
