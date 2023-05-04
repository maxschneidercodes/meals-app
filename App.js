import { StatusBar } from "expo-status-bar";
import CategorysScreen from "./screens/Category";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Meals from "./screens/Meals";
import MealScreen from "./screens/MealScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categorys" component={CategorysScreen} />
          <Stack.Screen name="Meals" component={Meals} />
          <Stack.Screen name="Meal" component={MealScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
