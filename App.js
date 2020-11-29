import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
          <Text>Click me2</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
