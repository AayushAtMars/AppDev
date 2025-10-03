import { useLocalSearchParams } from 'expo-router';
import {useState } from 'react';
import { Platform, StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';


export default function DetailScreen() {
    const {id,title} = useLocalSearchParams();

  return (
    <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:25,fontWeight:'bold'}}>Details for Todo</Text>
        <Text style={{fontSize:15}}>ID : {id}</Text>
        <Text style={{fontSize:15}}>Title : {title}</Text>
    </View>
  );
}
