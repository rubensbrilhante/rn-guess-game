import { Text, View, StyleSheet, Alert } from 'react-native';
import Title from '../components/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';

function genareteRandom(min, max, exclude) {
  const rdn = Math.floor(Math.random() * (max - min)) + min;
  return rdn === exclude ? genareteRandom(min, max, exclude) : rdn;
}

let min = 1;
let max = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = genareteRandom(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess]);

  function nextGuess(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('Have you forgot the number?', '', [
        {
          text: 'Dismiss',
          style: 'cancel',
        },
      ]);
      return;
    }

    if (direction === 'lower') {
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }

    setCurrentGuess(genareteRandom(min, max, currentGuess));
  }

  return (
    <View style={styles.screen}>
      <Title>Game Screen</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Text Higher or lower?</Text>
        <View>
          <PrimaryButton pressHandler={nextGuess.bind(this, 'greater')}>
            +
          </PrimaryButton>
          <PrimaryButton pressHandler={nextGuess.bind(this, 'lower')}>
            -
          </PrimaryButton>
        </View>
      </View>
      {/* <View>Log Rounds</View>; */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {},
});
