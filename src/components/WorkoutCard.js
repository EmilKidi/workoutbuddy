import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import config from '../config';
import styles from '../styles';

export default class WorkoutCard extends Component {
  render() {
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
