import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { data } from "../../assets/dataset/MobileNames";
import AntDesign from "@expo/vector-icons/AntDesign";

const Brands = () => {
  const mobile = [
      {
    id: 7,
    name: "MOTOROLA g35 5G (Leaf Green, 128 GB)",
    rating: 4.2,
    reviews: "98,114",
    price: "₹8,999",
    originalPrice: "₹12,499",
    discount: "28% off",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/v/c/g35-5g-pb3h0001in-motorola-original-imah7c6xqfsptyzx.jpeg?q=70",
  },
  {
    id: 8,
    name: "Motorola g45 5G (Brilliant Blue, 128 GB)",
    rating: 4.3,
    reviews: "2,37,228",
    price: "₹11,999",
    originalPrice: "₹14,999",
    discount: "20% off",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/l/c/-original-imah3xk892aj9gck.jpeg?q=70",
  },
  {
    id: 9,
    name: "MOTOROLA Edge 60 Fusion 5G (PANTONE Zephyr, 256 GB)",
    rating: 4.5,
    reviews: "37,566",
    price: "₹21,999",
    originalPrice: "₹27,999",
    discount: "21% off",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/e/i/-original-imahgqnzuy2fzusz.jpeg?q=70",
  },
  {
    id: 10,
    name: "MOTOROLA Edge 60 Pro (Pantone Shadow, 256 GB)",
    rating: 4.3,
    reviews: "34,354",
    price: "₹25,999",
    originalPrice: "₹36,999",
    discount: "29% off",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/y/x/-original-imah3xk8crpgrg9y.jpeg?q=70",
  },
  ];
  return (
    <View>
      <Text style={{ marginTop: 20, fontSize: 15, fontWeight: "900" }}>
        Brands
      </Text>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.main}>
            <View style={[styles.card, { backgroundColor: item.color }]}>
              <View>{item.icons}</View>
            </View>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          </TouchableOpacity>
        )}
      />
      <View style={{marginTop:20}}></View>
      <FlatList
        data={mobile}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // <-- two items per row
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 15,
          gap:15
        }}
        renderItem={({ item }) => (
          <View style={styles.main2}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={{fontWeight:'bold'}}>{item.name}</Text>
            <View style={{ flexDirection: "row", gap: 30,}}>
              <Text style={{backgroundColor:'#0aa12bff', color:'white', paddingHorizontal:5, borderRadius:5}}>
                {item.rating} <AntDesign name="star" size={12} color="#ffff" />
              </Text>
              <Text style={{color:'#525151ff'}}>({item.reviews})</Text>
            </View>
            <View style={{flexDirection:'row', gap:10, paddingHorizontal:20 }}>
              <Text style={{fontWeight:"600"}}>{item.price}</Text>
              <Text style={{color:'#525151ff', textDecorationLine:'line-through'}}>{item.originalPrice}</Text>
              <Text style={{color:'#525151ff' , fontWeight:'600'}}>{item.discount}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    marginTop: 10,
  },
  card: {
    borderRadius: 100,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
  },
  name: {
    marginRight: 18,
    marginTop: 5,
    fontWeight:'bold'
  },
main2: {
  flex: 1,               
  alignItems: "center", 
  backgroundColor: "#fff", 
  paddingVertical: 10,
  paddingHorizontal:15,
  borderRadius: 8,
  gap:8,
  borderWidth:0.2,
},
image: {
  width: "80%", 
  height: 180,
  resizeMode: "contain",
  borderRadius: 8,
},
});
