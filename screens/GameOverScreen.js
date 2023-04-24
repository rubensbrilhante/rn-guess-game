import { Text, View, StyleSheet, Alert } from 'react-native';

function GameOverScreen(params) {
  return (
    <View style={styles.screen}>
      <Text>Game over</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {},
});
