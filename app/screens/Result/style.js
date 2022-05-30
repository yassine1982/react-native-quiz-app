/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  titleContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    width: '90%',
    backgroundColor: COLORS.accent,
  },
  inputContainer: {
    height: '50%',
    alignItems: 'center',
    marginHorizontal: 15,
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    paddingVertical: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.accent,
  },
  Start: {
    height: 40,
    width: '70%',
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    // marginTop: SIZES.height / 16,
    justifyContent: 'center',
    backgroundColor: COLORS.playagain,
  },
  titleStart: {
    color: COLORS.white,
    fontSize: 22,
    fontFamily: 'ComicNeue-BoldItalic',
  },
  titleExit: {
    color: COLORS.white,
    fontSize: 22,
    fontFamily: 'ComicNeue-BoldItalic',
  },
  titlecongrate: {
    color: COLORS.white,
    fontSize: 22,
    // fontWeight: '700',
    alignSelf: 'center',
    fontFamily: FONTS.comicItalic,
  },

  imageTop: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    // borderRadius: 100,
    // backgroundColor: COLORS.primary,
    padding: 0,
    // margin: 10,
  },
  imageWarning: {
    alignSelf: 'center',
    height: 120,
    width: 120,
    // backgroundColor: COLORS.playagain,
    // marginTop: -10,
    padding: 0,
  },
  imageResult: {
    // backgroundColor: COLORS.playagain,
    alignSelf: 'center',
    height: 120,
    width: 120,
    padding: 0,
    // marginTop: -10,
  },
  correctanswer: {
    color: COLORS.success,
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
    fontFamily: FONTS.comicItalic,
  },
  incorrectanswer: {
    color: COLORS.error,
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
    fontFamily: FONTS.comicItalic,
  },
});
