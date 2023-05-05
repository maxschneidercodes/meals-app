import { View, Text, Pressable, Image, StyleSheet } from "react-native";

export default function Meal(props) {
  function handlePress() {
    props.onPress(props.item.id);
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <Image source={{ uri: props.item.imageUrl }} style={styles.image} />
        <View>
          <Text style={styles.title}>{props.item.title}</Text>
          <Text>{props.item.affordability.toUpperCase()}</Text>
          <Text>{props.item.duration}min</Text>
          <Text>{props.item.complexity.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
});
