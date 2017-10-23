import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
  } from 'react-native';

import Util from './../util';

class Help extends Component{
  render(){
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>Q: Who owns this APP?</Text>
        <Text style={styles.text}>A: Jiaxin CHEN</Text>
        <Text style={styles.text}>Q: Which situation is this app used for?</Text>
        <Text style={styles.text}>A: For the CMUA student to get relative information.</Text>
        <Text style={styles.text}>Q: Where does the data come from?</Text>
        <Text style={styles.text}>A: The data is from Google Database.</Text>
        <Text style={styles.text}>Q: Does the data provided accurately?</Text>
        <Text style={styles.text}>A: The service provided by Google is accurate, but we have to exclude the problems caused by GPS.</Text>
        <Text style={styles.text}>Q: Others</Text>
        <Text style={styles.text}>A: Contact me: jiaxinc1@andrew.cmu.edu .</Text>
        <Text style={styles.text}>......</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  text:{
    fontSize:16,
    fontWeight:'300',
    marginBottom:15,
    marginLeft:10,
    marginTop:3
  }
});

module.exports = Help;