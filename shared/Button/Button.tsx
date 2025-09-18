import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

export function Button({ text, ...props }: PressableProps & { text: string }) {
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 62,
    borderRadius: Radius.r16,
    backgroundColor: Colors.orange,
  },
  text: {
    color: Colors.white,
    fontSize: Fonts.f16,
    fontFamily: Fonts.semibold,
  },
});
