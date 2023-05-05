import { StatusBar } from "expo-status-bar";
import CategorysScreen from "./screens/Category";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Meals from "./screens/Meals";
import MealScreen from "./screens/MealScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "./screens/Favourites";
import IconButton from "./components/IconButton";
import FavProvider from "./store/context/context";
import { enableScreens } from "react-native-screens";
import { Ionicons } from "@expo/vector-icons";
enableScreens(true);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="CategorysScreenTab"
        component={CategorysScreen}
        options={{
          tabBarAccessibilityLabel: "Categories",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarAccessibilityLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <FavProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="CategorysScreen"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Meals" component={Meals} />
            <Stack.Screen name="Meal" component={MealScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavProvider>
    </>
  );
}
