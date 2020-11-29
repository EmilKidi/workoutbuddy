import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import TopNavBar from './src/components/TopNavBar';
import BottomNavBar from './src/components/BottomNavBar';

export default function App() {
  return (
  <React.Fragment>
    <TopNavBar style={{flex:1}} />
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Feed</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    <BottomNavBar />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
