/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
const ErrorMessage = ({children}) => {
  return (
    <View
      style={{
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: 'orangered',
        textAlign: 'center',
        color: 'white',
        textTransform: 'capitalize',
      }}>
      {children}
    </View>
  );
};

export default ErrorMessage;
