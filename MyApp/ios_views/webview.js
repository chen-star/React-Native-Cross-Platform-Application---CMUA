import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
  } from 'react-native';

class TWebView extends Component{
  constructor(props){
    super(props);
    this.state = {
      url: this.props.url,
      isMargin: this.props.isMargin,
      isShowErrorPage: false,
      isNearBy: this.props.isNearBy,
      isRes: this.props.isRes
    };
  }
  render(){
    let url = {uri: this.state.url};
    //if(this.state.isNearBy){
    //  url = require('./../html/nearby.html');
    //}
    //if(this.state.isWeather){
    //  url = require('./../html/weather.html');
    //}
    return(
      <View style={styles.container}>
        {
          this.state.isShowErrorPage? // error happen
            <View style={styles.textView}>
              <Text style={styles.text}>Sorry, Please check your network connection</Text>
            </View>
            :
            <WebView // no error
              style={[styles.container,{marginTop: this.state.isMargin || -20}]}
              startInLoadingState={true}
              onError={this._loadError.bind(this)}
              source={url}>
            </WebView>
        }
      </View>
    );
  }

  _loadError(){
    this.setState({
      isShowErrorPage: true
    });
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text:{
    fontSize:16,
    fontWeight:'300'
  },
  textView:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  }
});

module.exports = TWebView;