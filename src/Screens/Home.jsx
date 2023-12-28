import { StyleSheet, Text, View,Image, } from 'react-native'
import React from 'react'
// import { SearchBar } from 'react-native-screens'
// import { SearchBar } from '../Components/SearchBar'
import SearchBar from '../Components/SearchBar'

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}> 
      <View>
       <Text style={{color: 'black',marginBottom:5,
      fontWeight:'500', fontSize:25,
      }}> Hello </Text>
       <Text style={{color: 'black',  fontWeight:'bold', fontSize:20,}}> Tausif Raza </Text>
       </View>

        <View>
        <Image style={styles.image}  source ={require('../Assets/Images/Login.png') }  />
        </View>

 




       </View>
       {/* for search Input */}
       <SearchBar/>
       

   {/* Banner */}
    <View>
      
    </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
  backgroundColor:'red',
  // marginLeft:15,
  // marginRight:15,
  padding:20,
  },
   header:{
      display: 'flex',
      flexDirection:'row',
       gap:150,
      //  backgroundColor:'green',
  
      marginTop:10,
      //  height:200,
       width:1000,
  },
  image:{
    height:60,
    width:60,
    borderRadius:30,
  },
 

})




















// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
// } from 'react-native';

// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Home = ({navigation}) => {
//   const image = {
//     uri: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={{fontSize: 30}}> Work in progress... </Text>
//       <Image source={{uri: 'https://reactjs.org/logo-og.png'}} />
//       <View>
//         <Image source={image} style={styles.image} />
//       </View>
//       <View>
//         {/* <Text style={{fontSize:40,textAlign:'center',fontWeight:'bold',  marginBottom:10, }}>Welcome To </Text> */}
//         <Text
//           style={{
//             fontSize: 40,
//             color: '#87ceeb',
//             fontWeight: 'bold',
//             textAlign: 'center',
//           }}>
//           MyApp{' '}
//         </Text>
//         <Text style={styles.appDesc}>
//            Online Courses -Learn Anything,{'\n'} at Your Own Pace and On Your
//           Schedule
//         </Text>
//       </View>
//       <View style={styles.btnContainer}>
//         {/* <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('Login')}>
//           <Text style={styles.text}>Login </Text>
//         </TouchableOpacity> */}

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('Course')}>
//           <Text style={styles.text}>Course </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('Student')}>
//           <Text style={styles.text}>Student </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('About')}>
//           <Text style={styles.text}>About</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('Contact')}>
//           <Text style={styles.text}>Contact </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 300,
//     height: 250,
//     borderRadius: 20,
//     marginBottom: 10,
//   },
//   appDesc: {
//     fontSize: 15,
//     color: 'grey',
//     marginBottom: 85,
//   },
//   btnContainer: {
//     marginBottom: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     backgroundColor: 'grey',
//     padding: 10,
//     borderRadius: 10,
//     margin: 4,
//   },
//   text: {
//     color: 'white',
//   },
// });
