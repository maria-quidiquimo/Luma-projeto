import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CompraItem({  item, onToggle, onDelete  }){ 
  // na linha acima são as props: item > verifica se foi comprado, os outros dois aplica o comando
    return (
        <View style={styles.card}>
            <TouchableOpacity
                style={[styles.checkbox, item.comprado && styles.checkboxChecked]}
                onPress={() => onToggle(item.id)}
                >
                {item.comprado && <Text style={styles.checkmark}>✓</Text>} {/* marca checkzinho na compra */}
                
            </TouchableOpacity>

            <View style={styles.infoContainer}>
                <Text style={[styles.nome, item.comprado && styles.nomeComprado]}>{item.nome} 
                </Text>
                <Text style={styles.quantidade}>
                    Qtd: {item.quantidade}
                </Text>
            </View>

            <TouchableOpacity 
            style={styles.btnExcluir} 
            onPress={() => onDelete(item.id)}>
                <Text style={styles.btnExcluirTexto}>Excluir</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffe4ec', // rosa pastel
    padding: 15,
    borderRadius: 16, // mais arredondado
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#f8bbd0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ba68c8', // lilás suave
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  checkboxChecked: {
    backgroundColor: '#ba68c8', // lilás preenchido
  },
  checkmark: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6a1b9a', // lilás mais escuro
    fontFamily: 'Poppins-Bold',
  },
  nomeComprado: {
    textDecorationLine: 'line-through', // aplica o risquinho no nome do produto
    color: '#888',
  },
  quantidade: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
    fontFamily: 'Quicksand-Regular',
  },
  btnExcluir: {
    backgroundColor: '#f48fb1', // rosa forte
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20, // mais arredondado
    shadowColor: '#f8bbd0',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  btnExcluirTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },
});