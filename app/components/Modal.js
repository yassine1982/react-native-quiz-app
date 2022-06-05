/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import React from 'react';
import HyperLink from 'react-native-hyperlink';
import {FONTS, SHADOW} from '../constants';
import {useTranslation} from 'react-i18next';

const ModalScreen = ({showModal, COLORS, setShowModal}) => {
  const {t, i18n} = useTranslation();

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              // flex: 1,
              backgroundColor: COLORS.white,
              width: '90%',
              height: '60%',
              borderRadius: 20,
              padding: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>About Us</Text>
            <View
              style={{borderWidth: 1, borderColor: COLORS.black, width: '100%'}}
            />
            <View
              style={{
                // // flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                // marginVertical: 20,
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  // backgroundColor: '#FFa',
                  alignSelf: 'center',
                  fontFamily: FONTS.comicItalic,
                }}>
                {t('aboutContentText')}
              </Text>
              <HyperLink
                linkStyle={{color: '#2980b9', fontSize: 16}}
                onPress={(url, text) => console.log(url + ', ' + text)}
                linkDefault={true} // if false link doesn't go any where
                // linkText={url =>
                //   url === 'riahiy93@gmail.com' ? 'riahiy93@gmail.com' : url
                // }
              >
                {/* <Text>{t('give5start')}</Text> */}
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.accent,
                    fontFamily: FONTS.comicItalic,
                    marginTop: 10,
                  }}>
                  riahiy93@gmail.com
                </Text>
              </HyperLink>
            </View>

            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={[
                {
                  backgroundColor: COLORS.accent,
                  padding: 4,
                  width: '70%',
                  borderRadius: 40,
                  marginTop: 5,
                },
                SHADOW,
              ]}>
              <Text
                style={{
                  textAlign: 'center',
                  color: COLORS.white,
                  fontSize: 20,
                }}>
                Ok
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({});
