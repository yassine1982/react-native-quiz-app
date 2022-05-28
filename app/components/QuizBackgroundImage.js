/* eslint-disable prettier/prettier */
import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import { SIZES } from '../constants';
import DottedBG from '../assets/images/DottedBG.png'
const QuizBackgroundImage = () => {
    return (
        <>
            <Image
                source={DottedBG}
                style={styles.image}
                resizeMode={'contain'}
            />
        </>
    );
};

export default QuizBackgroundImage;

const styles = StyleSheet.create({
    image: {
        width: SIZES.width,
        alignSelf: 'center',
        height: 130,
        zIndex: -1,
        position: 'absolute',
        bottom: -5,
        left: 0,
        right: 0,
        opacity: 0.7,
        // backgroundColor: "grey"
    },
});
