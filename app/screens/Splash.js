/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {COLORS} from '../constants';

const Splash = ({navigation}) => {
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
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />

      <LottieView
        source={require('../assets/lottie/computer.json')}
        autoPlay
        loop={false}
        // style={{ backgroundColor: COLORS.playagain }}
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
export default Splash;
