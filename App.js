import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ListaComprasScreen from './src/screens/ListaComprasScreen'
import ProfileScreen from './src/screens/PerfilScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListaComprasScreen />
      <ProfileScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
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
