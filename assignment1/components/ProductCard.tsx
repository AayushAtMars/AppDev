import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign'




type product = {
    id: string;
    name: string;
    price: number;
    rating: number;
    image: string;
}

const ProductCard = ({ item }:{item:product}) => {
  return (
    <View style={styles.card}>
      <View style={styles.relative}>
        <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
        <View style={{position:"absolute", right:3, top:3, backgroundColor:'white', borderRadius:100, padding:4, alignItems:'center', justifyContent:'center'}}>
          <AntDesign name="heart" size={18} color="#693a26" />
          </View>
      </View>
      <View style={styles.NameStar}>
        <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.rating}>⭐ {item.rating}</Text>
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity>
          <Ionicons name="add-circle" size={25} color="#693a26" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    borderColor:'grey',
    borderWidth:1,
    backgroundColor: "#fff",
    // margin: 8,
    borderRadius: 10,
    padding: 6,
    elevation: 2,
  },
  image: {
    width:160,
    height: 150,
    borderRadius: 8,
  },
  name: {
    fontWeight: "600",
    width:80
  },
  price: {
    color: "#693a26",
    fontWeight: "bold",
    marginVertical: 4,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal:5,
  },
  rating: {
    color: "#693a26",
    fontWeight:'700'
  },
  NameStar:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:5,
    marginTop: 8,
  },
  relative:{
    position:'relative',
  }
});
