/* @flow */
'use strict';

import React, { Component } from 'react';
import { TouchableOpacity, Text, Linking } from 'react-native';

export class OpenLink extends Component {
  propTypes: {
    phoneNumber: React.PropTypes.string,
    email: React.PropTypes.string
  }

  render() {
    return (
      <Text>i am component</Text>
    )
  }
}
