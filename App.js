import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './screens/Categories';
import { StatusBar } from 'expo-status-bar';
import MealsOverview from './screens/MealsOverview';
import MealDetail from './screens/MealsDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name="MealsCategory"
            component={Categories}
            options={{
              title: 'All Categories',
            }}
          />
        <Stack.Screen name="MealsOverview" component={MealsOverview} />
        <Stack.Screen name="MealDetail" component={MealDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
