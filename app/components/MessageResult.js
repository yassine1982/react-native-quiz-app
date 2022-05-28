/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const MessageResult = ({ image, lottieStyle, textStyle, Message }) => {
    return (
        <>
            <LottieView
                source={image}
                autoPlay
                loop={true}
                style={lottieStyle}
            />
            <Text style={textStyle}>{Message} </Text>

        </>
    )
}

export default MessageResult

