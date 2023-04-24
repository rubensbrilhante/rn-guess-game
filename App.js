import React, { useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsgameOver] = useState(false);
  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsgameOver(false);
  };
  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  function gameOverHandler() {
    setIsgameOver(true);
  }
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (isGameOver) {
    screen = <GameOverScreen />;
  }

  return (
    <SafeAreaView style={styles.full}>
      <View style={styles.root}>
        <StatusBar
          hidden={false}
          translucent={true}
          networkActivityIndicatorVisible={true}
        />
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
