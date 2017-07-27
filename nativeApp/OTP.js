import React, { Component } from 'react';
import { AppRegistry, Text,Button, Alert, View,StyleSheet,TextInput,TouchableOpacity  } from 'react-native';

{/*-------------------------------------------------------------------*/}

{/*-------------------------------------------------------------------*/}



class TextInANest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Hai",
      bodyText: 'Please enter your country code and enter your phone number'
    };
  };

  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.bodyTextSizing} numberOfLines={5}>
          {'\n'}{'\n'}{'\n'}
          {this.state.bodyText}
        </Text>
      </Text>
    );
  }
};

 class FlexDirectionBasics extends Component {
   focusNextField(nextField) {
       this.refs[nextField].focus();
     }
  render() {
    return (
      // Try setting `flexDirection` to `column`.


      <View style={{flex: 1,flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <TextInput ref='1' onChangeText={() => this.focusNextField('2')} maxLength={1} keyboardType='numeric'underlineColorAndroid ="transparent" style={styles.inputFieldOTP}/>
        <TextInput ref='2' onChangeText={() => this.focusNextField('3')} maxLength={1} keyboardType='numeric'underlineColorAndroid ="transparent" style={styles.inputFieldOTP}/>
        <TextInput ref='3' onChangeText={() => this.focusNextField('4')} maxLength={1} keyboardType='numeric'underlineColorAndroid ="transparent" style={styles.inputFieldOTP}/>
        <TextInput ref='4' onChangeText={() => this.focusNextField('5')} maxLength={1} keyboardType='numeric'underlineColorAndroid ="transparent" style={styles.inputFieldOTP}/>
        <TextInput ref='5' onChangeText={() => this.focusNextField('6')} maxLength={1} keyboardType='numeric'underlineColorAndroid ="transparent" style={styles.inputFieldOTP}/>
        <TextInput ref='6' maxLength={1} keyboardType='numeric'underlineColorAndroid ="transparent" style={styles.inputFieldOTP}/>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',textAlign : 'center'
  },
  buttonTitleText: { fontSize: 20, fontWeight: 'bold', marginTop: 15, color : '#fff' },
  buttonSubmitText: { fontSize: 20, fontWeight: 'bold', marginTop: 10, color : '#fff' },
  buttonTitleTextOTP : {fontSize: 17, fontWeight: 'bold', marginTop: 40, color : '#000' },
  bodyTextSizing: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  SubmitContainer : {flex: 1, justifyContent: 'center', alignItems: 'center',marginTop: 90},
  SubmitButtonOn : {borderRadius: 40, height: 50, width:160 ,alignItems:'center',backgroundColor: '#02A4A9' },
  TitleHeader : {height: 60,alignItems:'center', marginTop:0,backgroundColor: '#02A4A9' },
  inputField : {marginLeft: 10, marginRight: 10,borderRadius: 10, alignItems:'center', fontSize: 20, fontWeight: 'bold',height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 40},
  inputFieldOTP : { fontSize: 20, fontWeight: 'bold', height: 50, width: 50, borderColor: 'gray', borderWidth: 1}
});

export default class BoldAndBeautiful extends Component {


  render() {
    return (
      <View>

      <TouchableOpacity disabled='true' style={styles.TitleHeader}>
          <Text style={styles.buttonTitleText}>Travel & Earn</Text>
      </TouchableOpacity>
      <TextInANest/>

      <TextInput keyboardType='numeric'
          underlineColorAndroid ="transparent"
          style={styles.inputField}
          maxLength={15}
          placeholder="your phone number"
          onChangeText={(titleText) => this.setState({titleText})}
       />

       <Text style={styles.buttonTitleTextOTP}> OTP: </Text>
       <FlexDirectionBasics/>

       <View style = {styles.SubmitContainer}>
       <TouchableOpacity style={styles.SubmitButtonOn} >
           <Text style={styles.buttonSubmitText}>Submit</Text>
       </TouchableOpacity>
      </View>

      </View>
    );
  }
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('BoldAndBeautiful', () => BoldAndBeautiful);
