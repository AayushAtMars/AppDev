import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from '@expo/vector-icons/AntDesign'

const socialIcons = {
  instagram: "📸",
  youtube: "🎥",
  twitter: "🐦",
};

export default function YourPlan() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Your plan</Text>

      <View style={styles.row}>
        <View style={[styles.card, styles.yogaCard]}>
          <Text style={styles.level}>Medium</Text>
          <Text style={styles.title}>Yoga Group</Text>
          <Text style={styles.details}>{"25 Nov.\n14:00–15:00\nA5 room"}</Text>
          <View style={styles.trainerRow}>
            <Image
              source={{ uri: "https://i.pravatar.cc/40?img=3" }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.trainerLabel}>Trainer</Text>
              <Text style={styles.trainerName}>Tiffany Way</Text>
            </View>
          </View>
        </View>

        <View style={styles.rightColumn}>
          <View style={[styles.card, styles.balanceCard]}>
            <Text style={styles.level}>Light</Text>
            <Text style={styles.title}>Balance</Text>
            <Text style={styles.details}>
              {"28 Nov.\n18:00–19:30\nA2 room"}
            </Text>
          </View>

          <View style={[styles.card, styles.socialsCard]}>
            <View style={styles.circle}>
              <Entypo name="instagram" size={20} color="#f726a3ff" />
            </View>
            <View style={styles.circle}>
              <FontAwesome6 name="youtube" size={20} color="#f726a3ff" />
            </View>
            <View style={styles.circle}><AntDesign name="twitter" size={20} color="#f726a3ff" />
</View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    circle:{
        padding:8,
        backgroundColor:"white",
        borderRadius:25,
        borderWidth:6,
        borderColor:"#df6bb0ff"
    },
  container: {
    paddingVertical: 20,
    paddingHorizontal:2
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 15,
    color: "#111",
  },
  row: {
    flexDirection: "row",
  },

  yogaCard: {
    flex: 1,
    backgroundColor: "#fab74bff",
    marginRight: 15,
  },
  rightColumn: {
    flex: 1,
  },

  card: {
    padding: 15,
    borderRadius: 20,
  },

  balanceCard: {
    backgroundColor: "#C7D7FF",
    marginBottom: 15,
  },
  socialsCard: {
    backgroundColor: "#f0acd5ff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    // paddingVertical: 20,
    gap:5
  },

  level: {
    fontWeight: "600",
    color: "#333",
    fontSize: 12,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
    overflow: "hidden", 
    alignSelf: "flex-start", 
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
    marginVertical: 5,
  },
  details: {
    color: "#333",
    marginBottom: 3,
    lineHeight: 18,
    fontWeight: "600",
  },

  trainerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    paddingTop: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  trainerLabel: {
    fontSize: 12,
    color: "#444",
  },
  trainerName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },

  socialIcon: {
    fontSize: 24,
  },
});
