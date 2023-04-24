import { StyleSheet, TextInput, View, Alert, Text } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/colors';
import Title from '../components/Title';

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, serEnteredNumber] = useState('');
  const onChangeInput = (enteredText) => {
    serEnteredNumber(enteredText);
  };
  const onPressReset = () => {
    serEnteredNumber('');
  };
  const onPressConfirm = () => {
    console.log('entered number', enteredNumber);
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert
      Alert.alert('Invalid Number', 'Set a number betwaeen 1 and 99', [
        { text: 'Okey', style: 'destructive', onPress: onPressReset },
      ]);
      return;
    }

    console.log('onPickNumber', onPickNumber);
    onPickNumber(chosenNumber);
  };
  return (
    <View style={styles.root}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.instruction}>Enter a number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={onChangeInput}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonOutter}>
            <PrimaryButton pressHandler={onPressReset}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonOutter}>
            <PrimaryButton pressHandler={onPressConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: 100,
  },
  instruction: {
    color: 'white',
    fontSize: 22,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary500,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,

    fontSize: 32,
    borderBottomColor: Colors.titleBorderColor,
    borderBottomWidth: 2,
    color: Colors.titleColor,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonOutter: {
    flex: 1,
  },
});
