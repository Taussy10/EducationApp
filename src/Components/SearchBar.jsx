import { StyleSheet, Text, View,  TextInput } from 'react-native'
import React from 'react'
import Colors from '../Assets/Shared/Colors'

const SearchBar = () => {
  return (
    <View>
        <TextInput
  style={styles.input}
  placeholder="Search"
  keyboardType="default"
/>
    </View>
  )
}

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    height: 40,
 
    margin: 12,
    borderWidth: 1,
    padding: 10,
    // don't use curly cause colors inside Colors.jsx is not in array so you can directly take color if it's in arrays name as color array then curly {colorArray.grey}
    color:Colors.grey,
    fontSize:20,
    fontWeight:'500',
  },
})