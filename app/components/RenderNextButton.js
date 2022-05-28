/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SHADOW } from '../constants';
import { useNavigation } from '@react-navigation/native';

const RenderNextButton = ({ showNextButton, handleNext }) => {
    const navigation = useNavigation();
    if (showNextButton) {
        return (
            <View style={styles.ButtonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={[{

                        width: '30%',
                        backgroundColor: COLORS.error,
                        borderWidth: 1,
                        borderColor: COLORS.accent,
                        height: 42,
                        alignSelf: 'center',
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }, SHADOW]}>
                    <Text
                        style={{
                            fontSize: 20, color: COLORS.white, textAlign: 'center', fontFamily: 'ComicNeue-BoldItalic',
                        }}>
                        Quit
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleNext}
                    style={[{

                        width: '50%',
                        backgroundColor: COLORS.accent,
                        borderWidth: 1,
                        borderColor: COLORS.accent,
                        height: 42,
                        alignSelf: 'center',
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }, SHADOW]}>
                    <Text
                        style={{
                            fontSize: 20, color: COLORS.white, textAlign: 'center', fontFamily: 'ComicNeue-BoldItalic',
                        }}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return null;
    }
};

export default RenderNextButton

const styles = StyleSheet.create({
    ButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 16,

    }
})