import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Button,
  RefreshControl,
  StyleSheet,
} from "react-native";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import EmptyState from "../components/EmptyState";
import { getProducts } from "../services/api";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getProducts();

      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      setError("Gagal mengambil data.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchProducts();
  };

  const handleSearch = (text) => {
    if (text === "") {
      setFilteredProducts(products);
      return;
    }

    const result = products.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredProducts(result);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (error !== "") {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>

        <Button
          title="Coba Lagi"
          onPress={fetchProducts}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>

      <SearchBar onSearch={handleSearch} />

      {filteredProducts.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          renderItem={({ item }) => (
            <ProductCard
              item={item}
              onPress={() =>
                navigation.navigate("Detail", {
                  product: item,
                })
              }
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  error: {
    fontSize: 18,
    marginBottom: 15,
    color: "red",
  },
});