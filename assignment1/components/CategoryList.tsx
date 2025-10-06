import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";


type category = {
  id:string,
  name:string,
  icon:string
}

const categories : category[] = [
  { id: "1", name: "Sofas", icon: "couch" },
  { id: "2", name: "TV Unit", icon: "tv" },
  { id: "3", name: "Chair", icon: "chair" },
  { id: "4", name: "Beds", icon: "bed" },
  { id: "5", name: "Tables", icon: "table" },
  { id: "6", name: "Wardrobe", icon: "door-closed" },
  { id: "7", name: "Dining Sets", icon: "utensils" },
  { id: "8", name: "Office Chairs", icon: "briefcase" },
  { id: "9", name: "Bookshelves", icon: "book" },
  { id: "10", name: "Shoe Racks", icon: "shoe-prints" },
  { id: "11", name: "Study Desks", icon: "laptop" },
  { id: "12", name: "Recliners", icon: "angle-double-down" },
  { id: "13", name: "Storage Units", icon: "boxes" },
];


const CategoryList = () => {
  const renderItem = ({ item } : {item:category}) => (
    <View style={styles.categoryBox}>
      <FontAwesome5 name={item.icon} size={26} color="#4B5563" />
      <Text style={styles.categoryText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal showsHorizontalScrollIndicator={false}
        style={{marginLeft:20}}
        
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 12,
    marginHorizontal: 15,
    paddingLeft:10
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  categoryBox: {
    alignItems: "center",
    gap:5,
    marginHorizontal:16,
    paddingVertical: 12,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 14,
    marginTop: 5,
    color: "#374151",
  },
});
