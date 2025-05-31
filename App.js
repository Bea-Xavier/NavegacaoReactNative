import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './scr/screens/HomeScreen';
import DetailsScreen from './scr/screens/DetailsScreen';
import ProfileScreen from './scr/screens/ProfileScreen';
import LoginScreen from './scr/screens/LoginScreen';
import SignUpScreen from './scr/screens/SignUpScreen';

const Stack = createStackNavigator();

export default function App() {

  const [initialRoute, setInitialRoute] = useState();

  //Colocar um bloco try catch, e personalizar tela de carregamento

  useEffect(() => {
    const verificacaoLogin = async () => {
      const logado = await AsyncStorage.getItem('logado');
      console.log('Valor salvo:', logado);
      if (logado === 'true') {
        setInitialRoute("Home");
      } else {
        setInitialRoute("Login");
      }
    };
    verificacaoLogin();
    console.log('Valor da rota:', initialRoute);
  }, []);

  if (!initialRoute) {
    // Exibe um loading enquanto a rota inicial está sendo definida
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}