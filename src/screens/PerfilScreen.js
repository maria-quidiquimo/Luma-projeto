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
        backgroundColor: '#F5F6FA',
    },
    content: {
        padding: 20,
        paddingTop: 30,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1A1A1A',
        marginBottom: 20,
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#7F5DF0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatarTexto: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',
    },
    userTag: {
        fontSize: 16,
        color: '#666',
        fontWeight: '500',
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
    },
    campoContainer: {
        marginVertical: 4,
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#888',
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    valor: {
        fontSize: 16,
        color: '#222',
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#F8F9FA',
        borderWidth: 1,
        borderColor: '#7F5DF0',
        borderRadius: 8,
        padding: 10,
        fontSize: 15,
        color: '#222',
    },
    divisor: {
        height: 1,
        backgroundColor: '#EAEAEA',
        marginVertical: 10,
    },
    btn: {
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnEditar: {
        backgroundColor: '#7F5DF0',
    },
    btnEditarTexto: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    botoesEdicao: {
        gap: 10,
    },
    btnSalvar: {
        backgroundColor: '#7F5DF0',
    },
    btnSalvarTexto: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    btnCancelar: {
        backgroundColor: '#EAEAEA',
    },
    btnCancelarTexto: {
        color: '#555',
        fontWeight: 'bold',
        fontSize: 15,
  },
});