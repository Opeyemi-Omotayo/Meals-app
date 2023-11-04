import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './screens/Categories';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator>
        <Stack.Screen name="MealsCategory" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
