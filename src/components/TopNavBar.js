import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import config from '../config';

export default class TopNavBar extends Component {
  render() {
    const navigation = this.props.navigation;

    return (
        <View style={style.navbar}>
          <View style={style.alignItems}>
            <TouchableOpacity style={style.alignItems} onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={style.title}>WorkoutBuddy</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={style.userButton}
              onPress={() => navigation.navigate('ProfileScreen')}
            >
              <Image 
                source={require('../assets/icons/bell.png')} 
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const style = StyleSheet.create({
  navbar: {
    paddingTop: StatusBar.currentHeight + 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: config.mainColor,
    borderBottomWidth: 5,
    borderColor: config.mainColorDark,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center"
  },
  alignItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  }
})
