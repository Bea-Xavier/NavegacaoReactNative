import { View, Text, Pressable, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🔮 Home Screen 🔮</Text>

            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('Details')}>
                <Text style={styles.textButton}>
                    Go to Details
                </Text>
            </Pressable>

            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.textButton}>
                    Go to Profile
                </Text>
            </Pressable>

            <TouchableOpacity
                style={styles.logoutButton}
                onPress={async () => {
                    await AsyncStorage.setItem('logado', 'false');
                    const check = await AsyncStorage.getItem('logado');
                    console.log('Valor salvo:', check);
                    navigation.navigate('Login')
                }}>
                <Text style={{ color: '#3e0364', fontSize: 20 }}>Logout</Text>
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
        width: windowWidth * 0.55,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    textButton: {
        color: '#FFFAFA',
        fontSize: 25,
    },
    logoutButton: {
        backgroundColor: '#FFFAFA',
        marginTop: 30,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        alignItems: 'center',
        width: windowWidth * 0.3,
    },
});