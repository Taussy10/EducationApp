import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Course = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Web Devlopment</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
        veritatis cumque nesciunt dolore facilis similique autem distinctio.
        Consectetur, aut asperiores!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    margin: 8,
  },
  image: {
    width: '100%', // Take the full width of the card
    height: 150, // Adjust the height as needed
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
  },
});

export default Course;
