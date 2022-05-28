/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, SHADOW } from '../constants/theme';

const RenderQuestion = ({ currQues, questions }) => {
    return (
        <>

            <View
                style={[
                    {
                        // marginTop: -10,
                        marginBottom: 5,
                        backgroundColor: COLORS.playagain,
                        borderRadius: 10,
                        padding: 8,
                    },
                    SHADOW,
                ]}>
                {/* Question Counter */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                    }}>
                    <Text
                        style={{
                            color: COLORS.white,
                            fontSize: 16,
                            opacity: 0.6,
                            marginRight: 2,
                        }}>
                        {currQues + 1}
                    </Text>
                    <Text style={{ color: COLORS.white, fontSize: 18, opacity: 0.6 }}>
                        {/* / {allQuestions.length} */}/ {questions.length}
                    </Text>
                </View>

                {/* Question */}
                <Text
                    style={{
                        color: COLORS.white,
                        fontSize: 18,
                    }}>
                    {/* {allQuestions[currentQuestionIndex]?.question} */}
                    {decodeURIComponent(questions[currQues]?.question)}
                </Text>
            </View>
        </>
    );
};

export default RenderQuestion;

const styles = StyleSheet.create({});
