import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Categories from './screens/Categories';
import { StatusBar } from 'expo-status-bar';
import MealsOverview from './screens/MealsOverview';
import MealDetail from './screens/MealsDetail';
import Favorites from './screens/Favorites';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          title: 'All Categories',
        }}
      />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
}


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
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
        <Stack.Screen name="MealsOverview" component={MealsOverview} />
        <Stack.Screen name="MealDetail" component={MealDetail}  options={{ title: 'About the meal'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
