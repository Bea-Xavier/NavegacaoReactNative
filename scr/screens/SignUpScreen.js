import { useState } from 'react';
import { View, Text, TextInput, Pressable, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function SignUpScreen({ navigation }) {

    const [defaultUser, setdefaultUser] = useState('');
    const [defaultPassword, setdefaultPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const validateLogin = async () => {
        if (defaultUser === '' || defaultPassword === '') {
            alert('Preencha todos os campos!');
            return;
        }
        if (defaultPassword !== confirm) {
            alert('As senhas não coincidem!');
            setConfirm('');
        } else {
            await AsyncStorage.setItem('user', defaultUser);
            await AsyncStorage.setItem('password', defaultPassword);
            alert('Cadastro realizado com sucesso!');
            navigation.navigate('Login')
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>👾 Sign Up 👾</Text>

            <TextInput
                style={styles.inputContainer}
                placeholder="Usuário"
                value={defaultUser}
                onChangeText={setdefaultUser}
            />

            <TextInput
                style={styles.inputContainer}
                placeholder="Senha"
                value={defaultPassword}
                onChangeText={setdefaultPassword}
                secureTextEntry={true}
            />

            <TextInput
                style={styles.inputContainer}
                placeholder="Confirme a senha"
                value={confirm}
                onChangeText={setConfirm}
                secureTextEntry={true}
            />
            
            <Pressable style={styles.buttonContainer} onPress={validateLogin}>
                <Text style={styles.textButton}>
                    Cadastrar
                </Text>
            </Pressable>

            <TouchableOpacity style={styles.backLogin} onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: '#3e0364', fontSize: 15 }}>Voltar para o Login</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8240bd',
    },
    title: {
        fontSize: 35,
        marginBottom: 20,
    },
    buttonContainer: {
        fontSize: 20,
        backgroundColor: '#440070',
        margin: 10,
        width: windowWidth * 0.40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    textButton: {
        color: '#FFFAFA',
        fontSize: 25,
    },
    inputContainer: {
        backgroundColor: '#f5f5dc',
        padding: 10,
        borderRadius: 10,
        border: '3px solid #4d007e', 
        marginBottom: 20,
        width: windowWidth * 0.6, 
        fontSize: 18
    },
    backLogin: {
        backgroundColor: '#FFFAFA',
        marginTop: 30,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        alignItems: 'center',
        width: windowWidth * 0.55, 
    },
});