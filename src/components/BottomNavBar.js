import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import config from '../config';

export default class BottomNavBar extends Component {
  render() {
    const navigation = this.props.navigation;
    
    return (
        <View style={style.bottomBar}>
            <TouchableOpacity 
              style={[style.userButton, {width: "25%"}]} 
              onPress={() => navigation.navigate('HomeScreen')}
            >
              <Image 
                source={require('../assets/icons/home.png')} 
                style={style.icons}
              />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[style.userButton, {width: "50%"}]}
              onPress={() => navigation.navigate('OverviewScreen')}
            >
              <Image 
                source={require('../assets/icons/add.png')} 
                style={style.icons}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[style.userButton, {width: "25%"}]}>
              <Image 
                source={require('../assets/icons/settings.png')} 
                style={style.icons}
              />
            </TouchableOpacity>
        </View>
    );
  }
}

const style = StyleSheet.create({
  bottomBar: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    paddingTop: 30,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: config.lightGrey,
  },
  icons: {
    height: 30, 
    width: 30, 
    alignSelf: "center"
  },
  userButton: {
    fontWeight: "bold",
  }
})
