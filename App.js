import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './scr/screens/HomeScreen';
import DetailsScreen from './scr/screens/DetailsScreen';
import ProfileScreen from './scr/screens/ProfileScreen';
import LoginScreen from './scr/screens/LoginScreen';
import SignUpScreen from './scr/screens/SignUpScreen';

const Stack = createStackNavigator();

const verificacaologin = async () => {
  try {
    
  } catch (error) {
    
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}