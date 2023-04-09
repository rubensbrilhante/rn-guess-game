import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View>
      <StatusBar
        hidden={false}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
