import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/Title';

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Game Screen</Title>
      <View>
        <Text>Text Higher or lower?</Text>
      </View>
      {/* <View>Log Rounds</View>; */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
