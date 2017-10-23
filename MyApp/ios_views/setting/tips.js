import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
  } from 'react-native';

import Util from './../util';

class Tips extends Component{
  render(){
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.text}>

            1. The terms of service to confirm and accept
            APP's ownership of the content and services owned by the App owned. Before you accept this service, please read these terms carefully. The user uses the service to indicate that the user accepts all the terms of service.
            APP will not disclose the user's name, address, email, account number and phone number (please refer to the privacy policy).
            Any user's behavior in this APP must follow:
            (1) the transmission of information must comply with relevant Chinese laws and regulations.
            (2) the use of information services for illegal purposes and unethical behavior.
            (3) do not interfere with or confuse network services.
            (4) comply with all network protocols, regulations, procedures and practices that use the service. The user's code of conduct is based on Internet regulations, policies, procedures and practices.
        </Text>
        <Text style={styles.text}>
            2. The modification of the terms of service
            This APP reserves the right to modify the terms as necessary and will be posted on the page.
            All use of APP services is deemed to be subject to changes in the terms of service.
        </Text>
        <Text style={styles.text}>

            3. The user's account number, password and security
            This APP does not currently provide registration and login functionality, so there is no user account, password and security issues.
        </Text>
        <Text style={styles.text}>

            4. Refuse to provide security
            Users expressly agree to use the company's services, by the user personally bear the risk.
            This site and APP does not guarantee the service must meet the requirements of users, nor guarantee the service will not be interrupted, the service timeliness, security, error occurs are not guaranteed.
            The user understands and accepts that the reliability of any information obtained through the service depends on the user's own judgment and the user assumes all risks and responsibilities.
        </Text>
        <Text style={styles.text}>

            5. Limited liability
            This APP is not responsible for any direct, indirect, incidental or consequential damages arising out of the use of the Services.
            These damages may come from (including but not limited to): improper use of the service, or transmission of information does not meet the requirements and so on.
        </Text>
        <Text style={styles.text}>

            6. The user information storage and restrictions
            This APP does not offer the release of data services at this time.
            If the user violates the terms of service, there is a disruption to the right to provide services.
        </Text>
        <Text style={styles.text}>

            7. Protection clause
            The APP will strictly keep the user's personal privacy, commitment without your consent will not disclose your personal information arbitrarily, so the resources will indicate the source.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  text:{
    marginLeft:10,
    marginRight:10,
    fontSize:15,
    marginTop:10
  }
});

module.exports = Tips;