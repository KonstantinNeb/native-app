import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from '../shared/Button/Button';
import { Colors, Fonts } from '../shared/tokens';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/backgroun-img.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Одно из самых вкусных кофе в городе!</Text>
        <Text style={styles.description}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
        <Button text="Начать" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  content: {
    justifyContent: 'flex-end',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 43,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: Fonts.f34,
    fontWeight: '600',
    paddingBottom: 8,
    color: Colors.white,
    textAlign: 'center',
  },
  description: {
    fontSize: Fonts.f14,
    fontWeight: '400',
    fontFamily: 'Sora',
    paddingBottom: 24,
    color: Colors.gray,
    textAlign: 'center',
  },
});
