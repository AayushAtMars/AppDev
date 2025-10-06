import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";


const second = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.top}>
        <Text style={styles.logo}>Weather</Text>
        <Image
        style={styles.threedot}
        source={require('../../assets/images/threedots.png')}
          resizeMode='contain'/>
      </View>

      <View>
        <FontAwesome5 name="house" iconType="solid" />
        <TextInput
        placeholder="Search for a city">
            
        </TextInput>
      </View>
    </View>
  );
};

export default second;

const styles = StyleSheet.create({
    top:{
    marginTop:50,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:30
  },
    logo:{
    fontSize:25,
    fontWeight:'bold'
  },
  threedot:{
    width:20,
    height:20,
  }
})
