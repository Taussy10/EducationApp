import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image,Text } from 'react-native';
import Colors from '../Assets/Shared/Colors';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


GoogleSignin.configure({
  offlineAccess: false,
  // SHA-1: 
  webClientId:'511578006795-hcnd59mo5oaqpvp8rbgaav8h35e3jhp3.apps.googleusercontent.com',
});

const Login = ({navigation}) => {
  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken, user } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const authResult = await auth().signInWithCredential(googleCredential);
      
      console.log('Signed in with Google!', authResult.user);
      console.log('User details:', user);
      navigation.navigate('Home');

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        console.error(error);
      }
    }
  };

  return (
  
    //   <Button
    //     title="Google Sign-In"
    //    
    //   />
  
    <View style={{flex:1,}}>
           <Image source={require('../Assets/Images/Login.png')} />
           <View style={styles.login}>
             <Text style={{ fontSize: 40, textAlign: 'center', fontWeight: 'bold', marginBottom: 10 , color:'black' }}>
               Welcome To
            </Text>
             <Text style={{ fontSize: 40, color: '#87ceeb', fontWeight: 'bold', textAlign: 'center', color:'black' }}>
               LearningAPP
             </Text>
             <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 40, color:'black' }}>
               Login/SignUp
             </Text>
             <TouchableOpacity  onPress={() => {onGoogleButtonPress();}} style={styles.button}>
               <Text style={{ color: 'white', marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}>
                    Sign in with Google {' '}
 
                
               </Text>
             </TouchableOpacity>
           </View>
         </View>


  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    backgroundColor: '#ede8e8',
    height: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
  },
});





// const Login = () => {
//   const [userInfo, setUserInfo] = useState(null);

//   const signIn = async () => {
//     try {
//       await GoogleSignin.configure();

//       const { idToken } = await GoogleSignin.signIn();
//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//       const authResult = await auth().signInWithCredential(googleCredential);
//       setUserInfo(authResult.user);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View>
//       <Image source={require('../Assets/Images/Login.png')} />
//       <View style={styles.login}>
//         <Text style={{ fontSize: 40, textAlign: 'center', fontWeight: 'bold', marginBottom: 10 }}>
//           Welcome To
//         </Text>
//         <Text style={{ fontSize: 40, color: '#87ceeb', fontWeight: 'bold', textAlign: 'center' }}>
//           LearningAPP
//         </Text>
//         <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 40 }}>
//           Login/SignUp
//         </Text>
//         <TouchableOpacity onPress={signIn} style={styles.button}>
//           <Text style={{ color: 'white', marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}>
//             {' '}
//             Sign in with Google{' '}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   login: {
//     backgroundColor: '#ede8e8',
//     height: '100%',
//     borderTopRightRadius: 40,
//     borderTopLeftRadius: 40,
//     padding: 20,
//   },
//   button: {
//     backgroundColor: Colors.primary,
//     padding: 10,
//     margin: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: 15,
//   },
// });

// export default Login;
