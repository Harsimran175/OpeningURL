import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Alert } from 'react-native';

// Linking Dependency
import * as Linking from 'expo-linking';

export default class App extends React.Component {
  //creating function
  goToURL = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
        Alert.alert("Something went wrong. Try again later");
      }
    });
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          backgroundColor: 'hotpink',
          width: 200,
          height: 40,
          borderRadius: 10,
          marginHorizontal: 70,
        }}
        onPress={() => {
          this.goToURL('https://www.google.com/');  //URL
        }}>
        <Text style={{ color: 'white' }}>Shop Now</Text>
      </TouchableOpacity>
    );
  }
}