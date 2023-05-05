import { useContext } from "react";
import { View, Text, Image, StyleSheet, Button, FlatList } from "react-native";
import { FavContext } from "../store/context/context";
import { MEALS } from "../data/dummy";
import Meal from "../components/Meal";

export default function Favorites({ navigation }) {
  const favContext = useContext(FavContext);

  const meals = MEALS.filter((meal) => favContext.ids.includes(meal.id));

  function renderMealItem({ item }) {
    function pressHandler() {
      navigation.navigate("Meal", { item: item });
    }

    return <Meal item={item} onPress={pressHandler} />;
  }

  return (
    <>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        numColumns={1}
      />
    </>
  );
}
