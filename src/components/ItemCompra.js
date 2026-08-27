import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CompraItem({  item, onToggle, onDelete  }){
    return (
        <View style={styles.card}>
            <TouchableOpacity
                style={[styles.checkbox, item.comprado && styles.checkboxChecked]}
                onPress={() => onToggle(item.id)}
                >
                {item.comprado && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>

            <View style={styles.infoContainer}>
                <Text style={[styles.nome, item.compado && styles.nomeComprado]}>       {item.nome}
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
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8, 
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#7F5DF0',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    checkboxChecked: {
        backgroundColor: '#7F5DF0',
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
        color: '#333',
    },
    nomeComprado: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    quantidade: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    btnExcluir: {
        backgroundColor: '#FF3B30',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    btnExcluirTexto: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
})