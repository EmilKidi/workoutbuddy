import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

import TopNavBar from '../components/TopNavBar';
import BottomNavBar from '../components/BottomNavBar';
import styles from '../styles';
import config from '../config';

export default OverviewScreen = ({ navigation }) => {
    return (
      <React.Fragment>
        <TopNavBar style={styles.topBar} navigation={navigation} />
        <ImageBackground source={require('../assets/btn.jpg')} style={{flex:3,backgroundColor:config.lightGrey,justifyContent:"center", alignItems: 'center'}}>
          <TouchableOpacity style={styles.SquareButton}>
            <Text style={styles.SquareButtonTxt}>+ ADD WORKOUT</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={[{flex:7}, {borderTopWidth:5,borderColor: config.mainColorDark}]}>
          <ScrollView>
            <Text style={{margin:10,padding:10}}>Recent workouts</Text>
          </ScrollView>
        </View>
        <StatusBar style="auto" />
        <BottomNavBar navigation={navigation} />
      </React.Fragment>
    );
}
