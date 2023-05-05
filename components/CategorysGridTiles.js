import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategoryGridTile({ title, color, onPress }) {
  // const navigate = useNavigation();

  // const handlePress = () => {
  //   navigate.navigate("Meals", { title });
  // };

  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable onPress={onPress}>
        <View style={[styles.gridItem, { backgroundColor: color }]}>
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#363636",
  },
});
