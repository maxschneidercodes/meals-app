import { useLayoutEffect, useContext } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import IconButton from "../components/IconButton";
import { FavContext } from "../store/context/context";

export default function MealScreen({ route, navigation }) {
  const item = route.params.item;
  const favContext = useContext(FavContext);

  const mealIsFav = favContext.ids.includes(item.id);

  function handlePress() {
    favContext.addFouvrite(item.id);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            title="Add"
            onPress={handlePress}
            icon="star"
            color=""
            style={styles.btn}
          />
        );
      },
    });
  }, []);

  return (
    <View>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.affordability.toUpperCase()}</Text>
        <Text>{item.duration}min</Text>
        <Text>{item.complexity.toUpperCase()}</Text>
        <Text style={styles.title}>{item.calories}Ingredient</Text>
        {item.ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
        <Text style={styles.title}>{item.calories}Steps</Text>
        {item.steps.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  btn: {
    opacity: 0.5,
  },
});
