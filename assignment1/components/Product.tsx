import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";


type product = {
    id: string;
    name: string;
    price: number;
    rating: number;
    image: string;
}



const products :product[] = [
  {
    id: "1",
    name: "Computer Table",
    price: 180,
    rating: 3.8,
    image:
      "https://furnikraft.com/wp-content/uploads/2025/04/CP-303-350x400.jpg",
  },
  {
    id: "2",
    name: "Compact Table",
    price: 123,
    rating: 4.2,
    image:
      "https://furnikraft.com/wp-content/uploads/2025/04/CP-302-350x400.jpg",
  },
  {
    id: "3",
    name: "Compact Pedestal",
    price: 210,
    rating: 4.5,
    image:
      "https://furnikraft.com/wp-content/uploads/2025/04/PD-01-350x400.jpg",
  },
  {
    id: "4",
    name: "Steel Office Table",
    price: 340,
    rating: 4.7,
    image:
      "https://furnikraft.com/wp-content/uploads/2025/04/CP-127-350x400.jpg",
  },
  {
    id: "5",
    name: "Two-Tone Side Unit",
    price: 340,
    rating: 4.7,
    image:
      "https://furnikraft.com/wp-content/uploads/2025/04/SU-02-05-350x400.jpg",
  },
  {
    id: "5",
    name: "Steel Office Almirah",
    price: 340,
    rating: 4.7,
    image:
      "https://furnikraft.com/wp-content/uploads/2025/04/1-05-350x400.jpg",
  },
];

const ProductGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>New Arrivals</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={styles.flatlist}>
        <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ gap: 12 }}
      />
      </View>
    </View>
  );
};

export default ProductGrid;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  viewAll: {
    marginRight:10,
    color: "#693a26",
    fontWeight:'600'
  },
  flatlist:{
    alignItems:'center',
  }
});
