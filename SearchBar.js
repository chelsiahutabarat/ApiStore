import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function SearchBar({ onSearch }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="🔍 Cari produk..."
      placeholderTextColor="#888"
      onChangeText={onSearch}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 16,
  },
});