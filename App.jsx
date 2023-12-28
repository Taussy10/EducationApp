 import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

import React from 'react';
import Home from './src/Screens/Home';
import Course from './src/Screens/Course';
import About from './src/Screens/About';
import Contact from './src/Screens/Contact';
import Student from './src/Screens/Student';
import Login from './src/Screens/Login';
// import { User } from '@react-native-google-signin/google-signin';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import { useState } from 'react';

const Stack = createNativeStackNavigator();

const App = () => {
  // const [auth, setAuth] = useState(false)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <NavigationContainer>
    
    {/* initialRouteName="Login" */}
        <Stack.Navigator initialRouteName="Login" >
        
          <Stack.Screen name="Login" component={Login} />
      
<Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
    

        
          
          <Stack.Screen
            name="Course"
            component={Course}
            options={{
              headerTitleStyle: {
                headerTitleAlign: 'center',
                fontSize: 20,
                color: 'black',
              },
              headerTitle: 'Courses',
            }}
          />
          <Stack.Screen name="Student" component={Student} />

          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
