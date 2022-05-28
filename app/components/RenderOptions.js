/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SHADOW} from '../constants/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RenderOptions = ({
  options,
  isOptionsDisabled,
  validateAnswer,
  currentOptionSelected,
  correctOption,
}) => {
  return (
    <View style={[styles.container, SHADOW]}>
      {options &&
        options.map((option, index) => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={index}
            style={{
              borderWidth: 2,
              borderColor:
                option === correctOption
                  ? COLORS.success
                  : option === currentOptionSelected
                  ? COLORS.error
                  : COLORS.secondary + '40',
              backgroundColor:
                option === correctOption
                  ? COLORS.success + '20'
                  : option === currentOptionSelected
                  ? COLORS.error + '20'
                  : COLORS.secondary + '20',
              height: 50,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 26,
              marginVertical: 8,
            }}>
            <Text style={{fontSize: 18, color: COLORS.white}}>
              {index + 1} - {decodeURIComponent(option)}
            </Text>
            {/* Show Check Or Cross Icon based on correct answer */}
            {option === correctOption ? (
              <View
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 26 / 2,
                  backgroundColor: COLORS.success,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: -10,
                }}>
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    color: COLORS.white,
                    fontSize: 18,
                  }}
                />
              </View>
            ) : option === currentOptionSelected ? (
              <View
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 26 / 2,
                  backgroundColor: COLORS.error,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: -10,
                }}>
                <MaterialCommunityIcons
                  name="close"
                  style={{
                    color: COLORS.white,
                    fontSize: 18,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default RenderOptions;
const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.accent,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#333A63',
    // backgroundColor: COLORS.background,
  },
});
