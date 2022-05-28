/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator';
const Progress = () => {
    return (
        <View>

            <CircularProgress
                value={60}
                radius={120}
                duration={2000}
                progressValueColor={'#ecf0f1'}
                maxValue={200}
                title={'KM/H'}
                titleColor={'white'}
                titleStyle={{ fontWeight: 'bold' }}
                inActiveStrokeOpacity={0.2}
                inActiveStrokeColor='#2ecc71'
            />
        </View>
    )
}

export default Progress

const styles = StyleSheet.create({})