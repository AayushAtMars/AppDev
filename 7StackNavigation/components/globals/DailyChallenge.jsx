import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function DailyChallenge() {
  return (
    <View style={styles.card}>
   
      <View style={styles.left}>
        <Text style={styles.title}>Daily challenge</Text>
        <Text style={styles.subtitle}>Do your plan before 09:00 AM</Text>


        <View style={styles.avatarRow}>
          <Image
            source={{ uri: "https://i.pravatar.cc/50?img=1" }}
            style={[styles.avatar, { zIndex: 3 }]}
          />
          <Image
            source={{ uri: "https://i.pravatar.cc/50?img=2" }}
            style={[styles.avatar, { left: -10, zIndex: 2 }]}
          />
          <Image
            source={{ uri: "https://i.pravatar.cc/50?img=3" }}
            style={[styles.avatar, { left: -20, zIndex: 1 }]}
          />
          <View style={[styles.extraCount, { left: -30 }]}>
            <Text style={styles.extraText}>+4</Text>
          </View>
        </View>
      </View>


      <Image
        style={styles.rightImage}
        source={require("../../assets/images/first.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#aa89fdff", 
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginVertical: 15,
    // position:'relative'
  },
  left: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E1E1E",
  },
  subtitle: {
    fontSize: 14,
    color: "#4B4B4B",
    marginTop: 5,
  },
  avatarRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
    position: "relative",
  },
  extraCount: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#7A63F3",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
    position: "relative",
  },
  extraText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
  rightImage: {
    width: 230,
    height: 230,
    // resizeMode: "contain",
    position:'absolute',
    left:200,
    bottom:-10
  },
});
