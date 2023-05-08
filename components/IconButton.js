import {
  TouchableWithoutFeedback,
  Easing,
  Animated,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";

export default function IconButton({ name, onPress }) {
  const [selected, setSelected] = useState(false);
  const selectedAnim = useRef(new Animated.Value(1)).current;

  function handlePress() {
    onPress();
  }

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={[{ transform: [{ scale: selectedAnim }] }]}>
        <TouchableOpacity
          onPress={() => {
            Animated.sequence([
              Animated.timing(selectedAnim, {
                toValue: 2,
                duration: 300,
                useNativeDriver: true,
              }),
              Animated.timing(selectedAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
              }),
            ]).start(() => setSelected((prev) => !prev));
            handlePress();
          }}
          style={styles.circle}
        >
          <Ionicons name={name} style={{ fontSize: 36, paddingRight: 20 }} />
        </TouchableOpacity>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
