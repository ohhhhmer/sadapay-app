import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Scroll} from 'react-native';
import Tab from './components/Navigator.js';
import Card from './screen/cardscreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
<Tab/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
