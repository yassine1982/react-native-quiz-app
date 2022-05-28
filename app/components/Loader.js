/* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import loader from '../assets/lottie/loader.json';
const Loader = () => {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <LottieView
                source={loader}
                autoPlay
                loop
                style={styles.loader}
            />
        </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    loader: {
        height: 250,
        width: 250,

    },
});
