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
    (this.state.titleText).map(x=> {
      array.push(
      <Text key={array.length} >
      {x.name}
      </Text>);
    });
    return (
    <View>
    {array}
    </View>
    );
  }
};
