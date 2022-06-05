/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {COLORS, FONTS, SHADOW} from '../../constants';
import computer from '../../assets/lottie/computer.json';
import go from '../../assets/lottie/go.json';
import {useTranslation} from 'react-i18next';

const Splash = ({navigation}) => {
  const {t} = useTranslation();
  const [finish, setFinish] = useState(false);
  const onAnimationFinish = () => setFinish(true);
  useEffect(() => {
    // StatusBar.setBackgroundColor('#FF573300');
    // StatusBar.setTranslucent(true)
    if (finish) {
      navigation.replace('Home');
    }
  }, [finish, navigation]);

  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <StatusBar backgroundColor="transparent" translucent={true} />

      <View
        style={{
          flex: 1,
          // backgroundColor: 'darkorange',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LottieView
          source={computer}
          autoPlay
          loop={false}
          style={{
            // backgroundColor: COLORS.playagain,
            height: 300,
            width: 300,
            alignSelf: 'center',
            borderRadius: 8,
            margin: 10,
          }}
          onAnimationFinish={onAnimationFinish}
        />
        {/* <LottieView
          source={go}
          autoPlay
          loop={false}
          style={{
            // backgroundColor: COLORS.playagain,
            height: 200,
            width: 200,
            alignSelf: 'center',
            borderRadius: 8,
            margin: 10,
          }}
          onAnimationFinish={onAnimationFinish}
        /> */}

        <View>
          <Text style={[styles.message]}>{t('splashText')}</Text>
        </View>
      </View>

      {/* <View style={{flex: 1, backgroundColor: 'red'}} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  message: {
    fontSize: 18,
    color: COLORS.black,
    lineHeight: 20,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    margin: 10,
    fontFamily: FONTS.comicItalic,
  },
  messageWrapper: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    padding: 10,
  },
});
export default Splash;
