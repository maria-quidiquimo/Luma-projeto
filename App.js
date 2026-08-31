import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import ListaComprasScreen from './src/screens/ListaComprasScreen';
import ProfileScreen from './src/screens/PerfilScreen';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('lista');

  return (
    <SafeAreaView style={styles.container}>
      {/* Exibe apenas a tela selecionada */}
      <View style={styles.conteudo}>
        {telaAtual === 'lista' ? <ListaComprasScreen /> : <ProfileScreen />}
      </View>

      {/* Menu do Rodapé */}
      <View style={styles.menuBar}>
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => setTelaAtual('lista')}
        >
          <Text style={[styles.menuTexto, telaAtual === 'lista' && styles.menuAtivo]}>
            🛒 Lista
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => setTelaAtual('perfil')}
        >
          <Text style={[styles.menuTexto, telaAtual === 'perfil' && styles.menuAtivo]}>
            👤 Perfil
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conteudo: {
    flex: 1,
  },
  menuBar: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
    backgroundColor: '#FFF',
  },
  menuItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTexto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#888',
  },
  menuAtivo: {
    color: '#7F5DF0',
  },
});