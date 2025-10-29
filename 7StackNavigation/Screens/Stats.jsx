import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Stats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stats</Text>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 24, fontWeight: "bold" },
});
