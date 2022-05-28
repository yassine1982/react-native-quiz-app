/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, FONTS, SHADOW} from '../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Hello = ({name, difficulty, _levelstart}) => {
  const navigation = useNavigation();
  return (
    <View>
      {/* Hello s*/}

      <LinearGradient
        // colors={['#4c669f', '#3b5998', '#192f6a']}
        // colors={['#db91d0', '#d959c6', '#d921bd']}
        colors={['#79DAE8', '#30AADF', '#3498db']}
        style={[
          {
            width: '105%',
            marginBottom: 5,
            // backgroundColor: COLORS.accent,
            borderRadius: 5,
            padding: 10,
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          SHADOW,
        ]}>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: FONTS.comicItalic,
              color: COLORS.white,
              fontSize: 18,
              opacity: 0.8,
            }}>
            Hello,
          </Text>

          {/* User Name  */}

          <Text
            numberOfLines={1}
            style={{
              color: 'orange',
              fontSize: 24,
              fontFamily: FONTS.comicItalic,
            }}>
            {name.length < 10 ? `${name}` : `${name.substring(0, 10)}...`}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesome name="line-chart" size={25} color={COLORS.white} />
          <Text
            style={{
              color: 'orange',
              marginTop: 4,
              fontSize: 18,
              fontFamily: FONTS.comicItalic,
            }}>
            {difficulty}
          </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome name="bell" size={21} color="white" />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: COLORS.error,
                borderRadius: 8,
                width: 16,
                height: 16,
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('notification')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  alignSelf: 'center',
                }}>
                1
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: 8}}>
            {/* <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star-o" size={20} color="white" />
          <FontAwesome name="star-o" size={20} color="white" /> */}
            {[...Array(3).keys()].map((a, index) => {
              // console.log('levelstart:', _levelstart);
              if (index <= _levelstart - 1) {
                return (
                  <FontAwesome
                    key={index}
                    name="star"
                    size={20}
                    color="orange"
                  />
                );
              } else if (index > _levelstart - 1) {
                return (
                  <FontAwesome
                    key={index}
                    name="star-o"
                    size={20}
                    color="white"
                  />
                );
              } else {
                return (
                  <FontAwesome
                    key={index}
                    name="star-o"
                    size={20}
                    color="white"
                  />
                );
              }
            })}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Hello;

const styles = StyleSheet.create({});
