import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

import TopNavBar from '../components/TopNavBar';
import BottomNavBar from '../components/BottomNavBar';
import styles from '../styles';
import config from '../config';

export default OverviewScreen = ({ navigation }) => {
    return (
      <React.Fragment>
        <TopNavBar style={styles.topBar} navigation={navigation} />
        <ImageBackground source={require('../assets/btn.jpg')} style={styles.bigAddbtnBG}>
          <TouchableOpacity style={styles.bigAddbtn}>
            <Image source={require('../assets/icons/addround.png')}></Image>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.recentWorkoutContainer}>
          <Text style={styles.progresstxt}>Progress</Text>
          <ScrollView>
          </ScrollView>
        </View>
        <StatusBar style="auto" />
        <BottomNavBar navigation={navigation} />
      </React.Fragment>
    );
}
