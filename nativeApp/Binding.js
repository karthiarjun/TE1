import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

export default class TextInANest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: [{name: "ja"},{name: "ji"},{name: "jr"}],
      bodyText: 'Please enter your country code and enter your phone number'
    };
  };

  render() {
    var array = [];
    array.push(<Text> havsghav </Text>);
    array.push(<Text> havdjshhvsghav </Text>);
    return (
    <Text> {array}</Text>
    );
  }
};
