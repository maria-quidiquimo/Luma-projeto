import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Cabeçalho / Foto de Perfil */}
      <View style={styles.header}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400' }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editBadge}>
            <Text style={styles.editBadgeText}>✏️</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.nome}>Maria Silva</Text>
        <Text style={styles.email}>maria.silva@email.com</Text>
      </View>

      {/* Card de Estatísticas do Luma */}
      <View style={styles.statsCard}>
        <View style={styles.statItem}>
          <Text style={styles.statNumero}>12</Text>
          <Text style={styles.statLabel}>Listas</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumero}>148</Text>
          <Text style={styles.statLabel}>Itens Comprados</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumero}>98%</Text>
          <Text style={styles.statLabel}>Concluídos</Text>
        </View>
      </View>

      {/* Menu de Configurações */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sua Conta</Text>
        
        <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
          <Text style={styles.menuIcon}>🛒</Text>
          <Text style={styles.menuText}>Minhas Listas Salvas</Text>
          <Text style={styles.menuSeta}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
          <Text style={styles.menuIcon}>🔔</Text>
          <Text style={styles.menuText}>Lembretes de Compras</Text>
          <Text style={styles.menuSeta}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
          <Text style={styles.menuIcon}>🎨</Text>
          <Text style={styles.menuText}>Aparência e Tema</Text>
          <Text style={styles.menuSeta}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Suporte</Text>
        
        <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
          <Text style={styles.menuIcon}>💬</Text>
          <Text style={styles.menuText}>Central de Ajuda</Text>
          <Text style={styles.menuSeta}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Botão Sair */}
      <TouchableOpacity style={styles.btnSair} activeOpacity={0.7}>
        <Text style={styles.btnSairTexto}>Sair da Conta</Text>
      </TouchableOpacity>
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