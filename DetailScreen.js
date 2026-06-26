import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function DetailScreen({ route }) {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>

      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />

      <Text style={styles.title}>
        {product.title}
      </Text>

      <Text style={styles.price}>
        ${product.price}
      </Text>

      <Text style={styles.category}>
        {product.category}
      </Text>

      <Text style={styles.description}>
        {product.description}
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
  },

  price: {
    fontSize: 22,
    color: "green",
    marginVertical: 10,
  },

  category: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});