/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#252c4a',
  secondary: '#1E90FF',
  accent: '#3498db',
  playagain: '#CD58A2',
  orange: '#FF8D29',
  success: '#00C851',
  error: '#ff4444',
  gray: '#DDDDDC', //
  black: '#171717',
  white: '#FFFFFF',
  background: '#353965',
  // background: '#333A63',
  bold: 'bold',
};

export const SHADOW = {
  shadowColor: '#000000',
  shadowOffset: {width: 0, height: 0},
  shadowRadius: 5,
  shadowOpacity: 0.4,
  elevation: 6,
};

export const SIZES = {
  base: 10,
  width,
  height,
};

export const FONTS = {
  comicItalic: 'ComicNeue-BoldItalic',
};
