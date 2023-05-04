import { View, Text, FlatList } from "react-native";
import { MEALS } from "../data/dummy";
import Meal from "../components/Meal";
// import { useRoute } from "@react-navigation/native";

export default function Meals({ route }) {
  // const route = useRoute()
  // const { item, id } = route.params;
  const { item, id } = route.params;
  console.log(item);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(item.id) >= 0
  );
  console.log(displayedMeals);

  function renderMealItem({ item }) {
    function pressHandler() {
      navigation.navigate("Meal", { item: item });
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
