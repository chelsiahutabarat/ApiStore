import React from "react";
import {
  View,
 Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function ProductCard({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />

        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>

        <Text style={styles.price}>
          ${item.price}
        </Text>

        <Text style={styles.category}>
          {item.category}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 180,
    resizeMode: "contain",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },

  price: {
    color: "green",
    fontSize: 18,
    marginTop: 5,
  },

  category: {
    color: "gray",
    marginTop: 5,
  },
});