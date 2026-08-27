import React, { useState } from "react";
import {
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import CompraItem from "../components/itemCompra";

export default function ListaComprasScreens(){
    const [itens, setItens] = useState([]);
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
}

useEffect(() => {
    carregarItens();
}, []);

const carregarItens = async () => {
    try {
        const dadosSalvos = await AsyncStorage.getItem('@luma:itens');
        if(dadosSalvos !== null){
            setItens(JSON.parse(dadosSalvos));
        }
    } catch (erro) {
        Alert.alert('Erro', 'Não foi possível carregar os itens.');
    }
};

const salvarItens = async (novaLista) => {
    try {
        await AsyncStorage.setItem('@luma:itens', JSON.stringify(novaLista));
    } catch (erro) {
        Alert.alert('Erro', 'Não foi possível salvar os dados')
    }
}

const adicionarItem = () =>{
   if(!nome.trim() || !quantidade.trim()) {
        Alert.alert('Aviso', 'Por favor, preencha o nome do produto e a quantidade');
        return;
    }

    const novoItem = {
        id: Date.now().toString(),
        nome: nome.trim(),
        quantidade: quantidade.trim(),
        comprado: false,
    };

    const novaLista = [...itens, novoItem];
    setItens(novaLista);
    salvarItens(novaLista);

    setNome('');
    setQuantidade('');
}

const alternarComprado = (id) => {
    const novaLista = itens.map(item => {
        if (item.id === id){
            return {...item, comprado: !item.comprado }
        }
        return item;
    });

    setItens(novaLista);
    salvarItens(novaLista);
};

const deletarItem = (id) => {
    Alert.alert(
        'Confirmar Exclusão',
        'Deseja remover este item?',
        [
            {text: 'Cancelar', style: 'cancel'},
            {
                text:'Excluir',
                onPress: () => {
                    const novaLista = itens.filter(item => item.id !== id);
                    setItens(novaLista);
                    salvarItens(novaLista); 
                },
                style:'destructive'
            }
        ]
    );
};

return (
    <View style={styles.screenContainer}>
        <Text style={styles.titulo}> 🛒 Luma - Lista de Compras </Text>

        <View style={styles.formulario}>
            <TextInput
                style={styles.input}
                placeholder="Nome do Produto"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={[styles.input, styles.inputQtd]}
                placeholder="Quantidade ex: 2"
                value={quantidade}
                onChangeText={setQuantidade}
            />
            <TouchableOpacity style={styles.btnAdicionar} onPress={adicionarItem}>
                <Text style={styles.btnAdicionarTexto}>+</Text>
            </TouchableOpacity>
        </View>

        <FlatList
            data={setItens}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <CompraItem
                    item = {item}
                    onToggle={alternarComprado}
                    onDelete={deletarItem}
                />
            )}

            contentContainerStyle={styles.listaContainer}
            ListEmptyComponent={
                <Text style={styles.listaVazia}>Sua lista de compras está vazia</Text>
            }
        />
    </View>
)

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A1A1A',
    marginBottom: 20,
  },
  formulario: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    flex: 2,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    marginRight: 10,
    fontSize: 16,
  },
  inputQtd: {
    flex: 1,
  },
  btnAdicionar: {
    backgroundColor: '#7F5DF0',
    paddingHorizontal: 18,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAdicionarTexto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  listaContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  listaVazia: {
    textAlign: 'center',
    color: '#888',
    marginTop: 40,
    fontSize: 16,
    paddingHorizontal: 20,
  },
});