//Importação de outros componentes necessários
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from "react";

//O componente FormIMC responável por receber os dados do usuário e calcular o IMC, em formato de função
const LoginScreen = ({navigation}) => {
    //Variávies de funcionamento 
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');


    //Lógica de cálculo do IMC, classificação e peso ideal
    const efetuarLogin = () => {
        //Inicializando as variáveis antes do laço de condição sem atribuir valores
        let userDefault = 'Usuário Padrão';
        let passwordDefault = 2025;


        //Cálculo do IMC
        if (user && password) {
            if ((!user == userDefault) && (!password == passwordDefault)) {
                alert('Usuário ou Senha inválidos! Tente novamente...');
                setUser();
                setPassword();
            }

            alert('Login efetuado com sucesso!');
            navigation.navigate('Home');
        };

    }

    //Renderização do componente FormIMC, com os campos para o usuário inserir o peso e altura
    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Usuário"
                keyboardType="default"
                value={user}
                onChangeText={setUser}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                keyboardType="numeric"
                value={password}
                onChangeText={setPassword}
            />
            <View style={styles.button}><Button title="Entrar" color="#87CEEB" borderRadius={16} onPress={efetuarLogin} /></View>
        </View>
    );

};

//Constante que guarda os estilos do componente
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#E0FFFF',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },

    button: {
        overflow: 'hidden',
        borderRadius: 15,
        marginTop: 20,
    }

});

export default LoginScreen;