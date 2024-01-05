import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Scroll} from 'react-native';

export default function Card() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent:'center',
    alignItems:'center',
  },
});
