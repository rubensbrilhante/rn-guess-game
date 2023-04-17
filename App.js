import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

export default function App() {
  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };
  const [userNumber, setUserNumber] = useState();
  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <SafeAreaView style={styles.full}>
      <View style={styles.root}>
        {/* <StatusBar
          hidden={false}
          translucent={true}
          networkActivityIndicatorVisible={true}
        /> */}
        <LinearGradient
          colors={[Colors.gradientStart, Colors.gradientEnd]}
          style={styles.full}
        >
          <ImageBackground
            source={require('./assets/images/dices.jpg')}
            resizeMode="cover"
            style={styles.full}
            imageStyle={styles.backgroundImage}
          >
            {screen}
          </ImageBackground>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flex: 1,
  },
  full: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
