import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Navigation } from 'react-native-navigation';



export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardValues: {title:"Hai"}
    };
  };

    render() {
      //Binding concept
       {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatar}>
                            <Image source={require('./assets/images/avatar.png')} style={{ width: 60, height: 60, borderRadius: 60 }}>
                            </Image>
                        </View>
                        <View style={{ margin: 5, flex: 2 }}>
                            <Text style={{ fontWeight: 'bold' }}>{this.state.cardValues.title}</Text>
                            <Text style={{ fontWeight: 'bold' }}>Package:Cricket Bat</Text>
                        </View>
                        <View style={styles.avatar}>
                            <Image style={styles.callIcon} source={require('./assets/images/call.png')}></Image>
                        </View>
                    </View>
                    <View style={styles.cardDetails}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold' }}>Departure</Text>
                            <Text style={{  }}>Visakhapatnam</Text>
                            <Text style={{ }}>AP-India</Text>
                            <Text style={{  }}>18/06/2017</Text>
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('./assets/images/direction.png')} style={{ width: 80, height: 80, borderRadius: 5 }}>
                            </Image>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold' }}>Destination</Text>
                            <Text style={{  }}>Chennai</Text>
                            <Text style={{ }}>TN-India</Text>
                            <Text style={{  }}>19/06/2017</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
      }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 5,

        height: 150,
        borderRadius: 6,
        borderColor: '#999',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 5,


    },
    subContainer: {
        flex: 1,
        flexDirection: 'column',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 2
    },
    avatarContainer: {
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'center'
    },
    avatar: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2,
        flex: 1,
        margin: 5,

    },
    cardDetails: {

        margin: 10,
        marginLeft: 5,
        flex: 1.3,
        borderRadius: 5,
        flexDirection: 'row'

    },
    callIcon: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        alignSelf: 'flex-end',
    }

});
