import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Hero from "@/components/Hero";
import CategoryList from "@/components/CategoryList";
import ProductGrid from "@/components/Product";

const index = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Hero />
        <CategoryList />
        <ProductGrid />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    flex: 1,
  },
});
