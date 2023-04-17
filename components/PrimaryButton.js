import { Text, View, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

function PrimaryButton({ children, pressHandler }) {
  return (
    <View style={styles.buttonOutter}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.buttonInner] : styles.buttonInner
        }
        onPress={pressHandler}
        android_ripple={{ color: Colors.buttonRipple }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutter: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInner: {
    backgroundColor: Colors.buttonPrimary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
