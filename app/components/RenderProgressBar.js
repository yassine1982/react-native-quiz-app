/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants';

const RenderProgressBar = ({ progressAnim }) => {


    return (
        <View style={{ marginVertical: 10 }} >
            <Text
                style={{ color: COLORS.white, fontSize: 20, marginLeft: 5, marginVertical: 15, fontFamily: 'ComicNeue-BoldItalic' }}
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

export default RenderProgressBar

const styles = StyleSheet.create({})