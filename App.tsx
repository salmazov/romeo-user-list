import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import UserListScreen from "./src/screens/UserListScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headline}>Romeo</Text>
      <UserListScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headline: {
    fontSize: 24, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginVertical: 10 
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
