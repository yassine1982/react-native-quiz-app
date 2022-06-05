/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// // React Native Toast – Toast Alert for Android
// // https://aboutreact.com/react-native-toast-android-only/

// // import React in our code
// import React, {useState, useEffect} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   View,
//   Text,
//   ToastAndroid,
//   TouchableHighlight,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import Hyperlink from 'react-native-hyperlink';
// import {Feather} from 'react-native-vector-icons/Feather';
// // Import the react-native-sound module
// import Sound from 'react-native-sound';
// import axios from 'axios';
// import EN from '../data/EN.json';
// import {setEnabled} from 'react-native/Libraries/Performance/Systrace';
// const Test = () => {
//   const [hard, setEN] = useState(EN[0].hard);
//   const [loading, setLoading] = useState(false);
//   const toastWithDurationHandler = async () => {
//     setLoading(true);
//     setTimeout(() => {
//       // setEN(EN[0].hard);
//       console.log(hard);
//       setLoading(false);
//     }, 1000);
//   };
//   useEffect(() => {}, []);
//   return (
//     <SafeAreaView style={styles.container}>
//       <View>{loading && <Text>Loading</Text>}</View>
//       <TouchableOpacity
//         style={styles.buttonStyle}
//         onPress={toastWithDurationHandler}>
//         <Text style={styles.buttonTextStyle}>
//           Generate Json Data from local file
//         </Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };
// export default Test;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     // backgroundColor: '#307ecc',
//     padding: 16,
//   },
//   buttonStyle: {
//     minWidth: '100%',
//     padding: 10,
//     backgroundColor: '#f5821f',
//     margin: 15,
//   },
//   buttonTextStyle: {
//     color: 'white',
//     textAlign: 'center',
//   },
//   titleStyle: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 20,
//     marginTop: 10,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: '600',
//     color: 'black',
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: 'black',
//     marginTop: 30,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 15,
//     fontWeight: '400',
//     color: '#307ecc',
//   },
// });

// React Native Vibration | Start Stop Device Vibration in React Native
// https://aboutreact.com/react-native-start-stop-device-vibration-on-button-click/

// import React in our code
// /* eslint-disable prettier/prettier */

import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Vibration,
} from 'react-native';

const Test = () => {
  //Duration of the vibration
  const DURATION = 200;
  const startVibration = () => {
    //To start the vibration for the defined Duration
    Vibration.vibrate(DURATION);
  };

  const stopVibration = () => {
    //To Stop the vibration
    Vibration.cancel();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>
          React Native Vibration | Start Stop Device Vibration in React Native
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={startVibration}>
          <Text style={styles.buttonTextStyle}>Start Vibration</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={stopVibration}>
          <Text style={styles.buttonTextStyle}>Stop Vibration</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});
