import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Button, TouchableOpacity } from 'react-native';
import config from '../config';

export default class TopNavBar extends Component {
  render() {
    return (
        <View style={style.navbar}>
          <View style={style.alignItems}>
            <Text style={style.title}>WorkoutBuddy</Text>
            <TouchableOpacity style={style.userButton} underlayColor='#fff'>
              <Text style={{color:"white"}}>Login</Text>
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
    justifyContent: "flex-end"
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
    borderBottomWidth: 5,
    fontWeight: "bold",
    borderColor: config.mainColorDark,
  }
})
