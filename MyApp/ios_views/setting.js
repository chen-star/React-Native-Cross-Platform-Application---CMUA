import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AlertIOS,
  TouchableOpacity,
  NavigatorIOS,
  ScrollView
  } from 'react-native';

import TWebView from './webview';

import Util from './util';
import Help from './setting/help';
import Detail from './setting/detail';
import Tips from './setting/tips';
//import About from './setting/about';

class SettingView extends Component{
  render(){
    return(
      <ScrollView style={styles.container}>
        <View style={styles.bg}>
          <Text style={{fontSize:18,color:'#fff',marginTop:10,fontWeight:'bold'}}>
            Setting
          </Text>
        </View>
        <View style={styles.container}>
          <View style={{justifyContent:'center', alignItems: 'center',marginBottom: 30, marginTop:10,marginBottom:20}}>
            <Image style={styles.icon} source={require('./setting/CMU_icon.png')} resizeMode="contain"/>
              <Text style={[styles.text, {marginTop:10, marginBottom: 20, fontSize:13}]}>Made by Jiaxin CHEN</Text>
          </View>
          <TouchableOpacity onPress={this._showDetail.bind(this)}>
            <View style={[styles.item, {borderTopWidth:Util.pixel}]}>
              <Text style={styles.text}>Function Intro</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showHelp.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text}>Help Center</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showTips.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text}>Service Item</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showAbout.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text}>About</Text>
            </View>
          </TouchableOpacity>
        </View>
          <View style={{justifyContent:'center', alignItems: 'center', marginTop: 100}}>
              <Text style={[styles.text, {fontSize:13}]}>v1.0.1</Text>
          </View>
      </ScrollView>
    );
  }

  _showHelp(){
    this.props.navigator.push({
      component: Help,
      title: 'Help Center',
      barTintColor: '#fff'
    });
  }

  _showTips(){
    this.props.navigator.push({
      component: Tips,
      title: 'Service Item',
      barTintColor: '#fff'
    });
  }

  _showAbout(){
    AlertIOS.alert('Contact me', 'jiaxinc1@andrew.cmu.edu', [{text: 'Confirm'}]);
  }

  _showDetail(){
    this.props.navigator.push({
      component: Detail,
      title: 'Function Intr',
      barTintColor: '#fff'
    });

  }
}

class Setting extends Component{
  render(){
    return(
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: SettingView,
          title: 'Setting',
          navigationBarHidden: true
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    // flex = 1 means occupy all the remaining space
    flex:1
  },
  item:{
    height:50,
    backgroundColor:'#fff',
    borderBottomWidth: Util.pixel,
    borderColor:'#ccc',
    justifyContent: 'center'
  },
  bg:{
    backgroundColor: '#FFF',
    height:40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize:15,
    marginLeft:10,
    color: '#7E7F7E'
  },
  icon:{
    width:88,
    height:100
  }
});

module.exports = Setting;