import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';

export default function PerfilScreen() {
  const [editando, setEditando] = useState(false);

  // Dados do usuário
  const [nome, setNome] = useState('Maria Silva');
  const [usuario, setUsuario] = useState('mariasilva');
  const [email, setEmail] = useState('maria.silva@email.com');

  // Estados temporários para quando estiver editando
  const [tempNome, setTempNome] = useState(nome);
  const [tempUsuario, setTempUsuario] = useState(usuario);
  const [tempEmail, setTempEmail] = useState(email);

  const handleIniciarEdicao = () => {
    setTempNome(nome);
    setTempUsuario(usuario);
    setTempEmail(email);
    setEditando(true);
  };

  const handleSalvar = () => {
    if (!tempNome.trim() || !tempUsuario.trim() || !tempEmail.trim()) {
      Alert.alert('Aviso', 'Preencha todos os campos!');
      return;
    }

    setNome(tempNome.trim());
    setUsuario(tempUsuario.trim().replace('@', ''));
    setEmail(tempEmail.trim());
    setEditando(false);
    Alert.alert('Sucesso', 'Perfil atualizado!');
  };

  const handleCancelar = () => {
    setEditando(false);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titulo}>Perfil do Usuário</Text>

      {/* Avatar com a primeira letra do Nome */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>
            {nome ? nome.charAt(0).toUpperCase() : 'U'}
          </Text>
        </View>
        <Text style={styles.userTag}>@{usuario}</Text>
      </View>

      {/* Card com os dados */}
      <View style={styles.card}>
        {/* Campo Nome */}
        <View style={styles.campoContainer}>
          <Text style={styles.label}>Nome</Text>
          {editando ? (
            <TextInput
              style={styles.input}
              value={tempNome}
              onChangeText={setTempNome}
              placeholder="Seu nome"
            />
          ) : (
            <Text style={styles.valor}>{nome}</Text>
          )}
        </View>

        <View style={styles.divisor} />

        {/* Campo Usuário */}
        <View style={styles.campoContainer}>
          <Text style={styles.label}>Usuário</Text>
          {editando ? (
            <TextInput
              style={styles.input}
              value={tempUsuario}
              onChangeText={setTempUsuario}
              placeholder="nome_usuario"
              autoCapitalize="none"
            />
          ) : (
            <Text style={styles.valor}>@{usuario}</Text>
          )}
        </View>

        <View style={styles.divisor} />

        {/* Campo E-mail */}
        <View style={styles.campoContainer}>
          <Text style={styles.label}>E-mail</Text>
          {editando ? (
            <TextInput
              style={styles.input}
              value={tempEmail}
              onChangeText={setTempEmail}
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          ) : (
            <Text style={styles.valor}>{email}</Text>
          )}
        </View>
      </View>

      {/* Botões de Ação */}
      {editando ? (
        <View style={styles.botoesEdicao}>
          <TouchableOpacity 
            style={[styles.btn, styles.btnSalvar]} 
            onPress={handleSalvar}
          >
            <Text style={styles.btnSalvarTexto}>Salvar Alterações</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.btn, styles.btnCancelar]} 
            onPress={handleCancelar}
          >
            <Text style={styles.btnCancelarTexto}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity 
          style={[styles.btn, styles.btnEditar]} 
          onPress={handleIniciarEdicao}
        >
          <Text style={styles.btnEditarTexto}>✏️ Editar Perfil</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffafc', // fundo clarinho
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 12,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3,
    borderColor: '#f48fb1', // rosa forte
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#ba68c8', // lilás
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
    shadowColor: '#f8bbd0',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  editBadgeText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6a1b9a', // lilás escuro
    fontFamily: 'Poppins-Bold',
  },
  email: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
    fontFamily: 'Quicksand-Regular',
  },
  statsCard: {
    flexDirection: 'row',
    backgroundColor: '#ffe4ec', // rosa pastel
    borderRadius: 20,
    paddingVertical: 18,
    marginBottom: 25,
    elevation: 3,
    shadowColor: '#f8bbd0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumero: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ba68c8',
    fontFamily: 'Poppins-Bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
    fontFamily: 'Quicksand-Regular',
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: '#f8bbd0',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ba68c8',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 10,
    marginLeft: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#f8bbd0',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuIcon: {
    fontSize: 18,
    marginRight: 14,
    color: '#f48fb1',
  },
  menuText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: '#6a1b9a',
    fontFamily: 'Quicksand-Regular',
  },
  menuSeta: {
    fontSize: 20,
    color: '#ba68c8',
    fontWeight: 'bold',
  },
  btnSair: {
    backgroundColor: '#fff0f6',
    borderWidth: 1,
    borderColor: '#f8bbd0',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
    shadowColor: '#f8bbd0',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  btnSairTexto: {
    color: '#f06292', // rosa vibrante
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },
});