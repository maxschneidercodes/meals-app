import { View, Text, FlatList } from "react-native";
import { MEALS } from "../data/dummy";
import Meal from "../components/Meal";

export default function Meals({ route, navigation }) {
  const { item } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(item.id) >= 0
  );

  function renderMealItem({ item }) {
    function pressHandler(id) {
      const meal = MEALS.find((meal) => meal.id === id);
      navigation.navigate("Meal", { item: meal });
    }
    return <Meal item={item} onPress={pressHandler} />;
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
