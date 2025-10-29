import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DateSelector() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <View style={styles.row}>
      {days.map((d, i) => (
        <View key={i} style={[styles.dateItem, d === "Wed" && styles.active]}>
          <Text style={[styles.day, d === "Wed" && styles.activeText]}>{d}</Text>
          <Text style={[styles.number, d === "Wed" && styles.activeText]}>{22 + i}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  dateItem: {
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical:30,
    borderRadius: 30,
    marginRight:10,
    borderWidth:0.2
  },
  day: { color: "#555" },
  number: { fontWeight: "600" },
  active: {
    backgroundColor: "#000",
  },
  activeText: { color: "#fff" },
});
