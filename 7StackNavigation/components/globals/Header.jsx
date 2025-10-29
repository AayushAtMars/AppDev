import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: "https://i.pravatar.cc/100" }}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.hello}>Hello, Sandra</Text>
        <Text style={styles.date}>Today 25 Nov.</Text>
      </View>

      <View>
        <FontAwesome name="search" size={22} color="#8d8d8d" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    marginTop: 50,
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  hello: {
    fontSize: 18,
    fontWeight: "700",
  },
  date: {
    color: "#666",
  },
});
