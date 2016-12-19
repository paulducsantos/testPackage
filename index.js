/* @flow */
'use strict';

import React, { Component } from 'react'
import { TouchableOpacity, Text, Linking } from 'react-native'

export class OpenLink extends Component {
  propTypes: {
    phoneNumber: React.PropTypes.string,
    email: React.PropTypes.string
  }

  handleClick = () => {
    Linking.canOpenURL(this.props.phoneNumber).then(supported => {
      if (supported) {
        Linking.openURL(this.props.phoneNumber);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.phoneNumber);
      }
    });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handleClick}>
        <Text>yoyoyo</Text>
      </TouchableOpacity>
    )
  }
}
