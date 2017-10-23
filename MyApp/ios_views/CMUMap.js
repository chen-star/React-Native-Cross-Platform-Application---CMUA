import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
  } from 'react-native';

import TWebView from './webview';

class CMUMap extends Component{
  render(){
    return(<TWebView url={'https://s3-ap-southeast-2.amazonaws.com/nearby/nearby.html'} isNearBy={true}/>);
  }
}

module.exports = CMUMap;