import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';

import TopNavBar from '../components/TopNavBar';
import BottomNavBar from '../components/BottomNavBar';
import styles from '../styles';
import config from '../config';

export default HomeScreen = ({ navigation }) => {
    return (
      <React.Fragment>
        <TopNavBar style={styles.topBar} navigation={navigation} />
        <View style={styles.container}>
          <ScrollView>
          <TouchableOpacity>
            <View style={{margin: 20, padding: 10, backgroundColor: config.lightGrey, flexDirection: "row"}}>
              <Image source={require('../assets/icons/chatting.png')} ></Image>
              <Text>You did it!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{margin: 20, padding: 10, backgroundColor: config.lightGrey, flexDirection: "row"}}>
              <Image source={require('../assets/icons/chatting.png')} ></Image>
              <Text>You did it!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{margin: 20, padding: 10, backgroundColor: config.lightGrey, flexDirection: "row"}}>
              <Image source={require('../assets/icons/chatting.png')} ></Image>
              <Text>You did it!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{margin: 20, padding: 10, backgroundColor: config.lightGrey, flexDirection: "row"}}>
              <Image source={require('../assets/icons/chatting.png')} ></Image>
              <Text>You did it!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{margin: 20, padding: 10, backgroundColor: config.lightGrey, flexDirection: "row"}}>
              <Image source={require('../assets/icons/chatting.png')} ></Image>
              <Text>You did it!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{margin: 20, padding: 10, backgroundColor: config.lightGrey, flexDirection: "row"}}>
              <Image source={require('../assets/icons/chatting.png')} ></Image>
              <Text>You did it!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{margin: 20, padding: 10, backgroundColor: config.lightGrey, flexDirection: "row"}}>
              <Image source={require('../assets/icons/chatting.png')} ></Image>
              <Text>You did it!</Text>
            </View>
          </TouchableOpacity>
          </ScrollView>
          <StatusBar style="auto" />
        </View>
        <BottomNavBar navigation={navigation} />
      </React.Fragment>
    );
}
