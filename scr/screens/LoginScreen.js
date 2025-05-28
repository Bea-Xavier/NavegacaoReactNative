import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const logado = AsyncStorage.setItem('logado');

    const authentication = async () => {
        const defaultUser = await AsyncStorage.getItem('user');
        const defaultPassword = await AsyncStorage.getItem('password');
        if (user === '' || password === '') {
            alert('Preencha todos os campos!');
            return;
        }

        if (user === defaultUser && password === defaultPassword) {
            alert('Login realizado com sucesso!');
            navigation.navigate('Home');
            await AsyncStorage.setItem('logado', true);
        } else {
            alert('Usuário ou senha incorretos');
            setUser('');
            setPassword('');
        }

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🎶 Login 🎶</Text>

            <TextInput
                style={styles.inputContainer}
                placeholder="Usuário"
                value={user}
                onChangeText={setUser}
            />

            <TextInput
                style={styles.inputContainer}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <Pressable style={styles.buttonContainer} onPress={authentication}>
                <Text style={styles.textButton}>
                    Login
                </Text>
            </Pressable>

            <TouchableOpacity style={styles.signUpContainer} onPress={() => navigation.navigate('SignUp')}>
                <Text style={{ color: '#3e0364', fontSize: 15 }}>Ainda não tem uma conta? Clique aqui!</Text>
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
        width: windowWidth * 0.35, 
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
    signUpContainer: {
        backgroundColor: '#FFFAFA',
        marginTop: 30,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        alignItems: 'center',
        width: windowWidth * 0.75, 
    },
});