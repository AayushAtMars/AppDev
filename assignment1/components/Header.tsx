import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Header = () => {
  return (
    <View style={styles.header}>
        <Ionicons name="menu" size={30} color="black" />
        <Image
          style={styles.logoImage}
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
        />
        <View style={styles.headerButton}>
          <FontAwesome5 name="search" size={18} color="#000000" />
          <FontAwesome5 name="shopping-bag" size={18} color="#000000" />
        </View>
      </View>
  )
}

export default Header


const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical:0
    // backgroundColor:'red'
  },
  logoImage: {
    width: 140,
    height: 60,
  },
  headerButton: {
    flexDirection: "row",
    gap: "15",
  },

})