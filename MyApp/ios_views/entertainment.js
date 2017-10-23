import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import TWebView from './webview';

class Entertainment extends Component{
    render(){
        return(<TWebView url={'https://s3-ap-southeast-2.amazonaws.com/nearby/entertainment.html'} isRes={true}/>);
    }
}

module.exports = Entertainment;