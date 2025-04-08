import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserListScreen from "./src/screens/UserListScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginVertical: 10 }}>Romeo</Text>
      <UserListScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
