import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.guessBorder,
    padding: 24,
    borderRadius: 8,
    marginVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.guessTextColor,
    fontSize: 36,
  },
});
