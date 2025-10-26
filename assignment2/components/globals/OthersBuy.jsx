import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { mobiles } from "../../assets/dataset/mobileData";
import AntDesign from "@expo/vector-icons/AntDesign";

const OthersBuy = () => {
  return (
    <View>
      <Text style={{ marginVertical: 10, fontSize: 15, fontWeight: "900" }}>
        Others buy
      </Text>
      <FlatList
              data={mobiles}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View style={styles.main}>
                  <Image source={{uri:item.image}} style={styles.image}  />
                </View>
                </TouchableOpacity>
              )}
            />



            <View style={{marginTop:20}}></View>
      <FlatList
        data={mobiles}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // <-- two items per row
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 15,
          gap:15
        }}
        renderItem={({ item }) => (
          <View style={styles.main2}>
            <Image source={{ uri: item.image }} style={styles.image2} />
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
  )
}

export default OthersBuy

const styles = StyleSheet.create({
    main: {
  flex: 1,               
  alignItems: "center", 
  backgroundColor: "#ffffffff", 
  borderRadius: 8,
  gap:8,
  borderWidth:0.2,
  padding:10,
  marginRight:10
},
image: {
  width: 100, 
  height: 100,
  resizeMode: "contain",
  borderRadius: 8,
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
image2: {
  width: "80%", 
  height: 180,
  resizeMode: "contain",
  borderRadius: 8,
},
})