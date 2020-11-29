import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';

import TopNavBar from '../components/TopNavBar';
import BottomNavBar from '../components/BottomNavBar';
import styles from '../styles';

export default ProfileScreen = ({ navigation }) => {
    return (
      <React.Fragment>
        <TopNavBar style={styles.topBar} navigation={navigation} />
        <View style={styles.container}>
          <TouchableOpacity>
            <Text>Profile</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
        <BottomNavBar navigation={navigation} />
      </React.Fragment>
    );
}
