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
                source={require('../assets/icons/addround.png')} 
                style={[style.icons, {width:75, height:75, marginTop:5, marginBottom:5}]}
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
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: config.lightGrey,
  },
  icons: {
    marginBottom: 20,
    marginTop: 30,
    height: 30, 
    width: 30, 
    alignSelf: "center",
  },
  userButton: {
    fontWeight: "bold",
  }
})
