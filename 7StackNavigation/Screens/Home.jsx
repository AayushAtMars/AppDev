import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from ".././components/globals/Header";
import DailyChallenge from ".././components/globals/DailyChallenge";
import DateSelector from ".././components/globals/DateSelector";
import YourPlan from ".././components/globals/YourPlan";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <DailyChallenge />
      <DateSelector />
      <YourPlan />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDE6FA",
    paddingHorizontal: 20,
  },
});
