import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import { router, Stack } from "expo-router";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Feather from '@expo/vector-icons/Feather'





const DeatailScreen = () => {
  const { city } = useLocalSearchParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const apiKey = process.env.EXPO_PUBLIC_WEATHER_API;

  function capitalizeFirstLetter(word) {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!city) {
        setLoading(false); // If no city, stop loading
        return;
      }
      setLoading(true);
      setData(null);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [city]); // <-- FIX: Add 'city' to the dependency array

  // Show a loading indicator while fetching
  if (loading) {
    return (
      <LinearGradient colors={["#7f5fa2", "#262066"]} style={styles.center}>
        <ActivityIndicator size="large" color="white" />
      </LinearGradient>
    );
  }

  // Show an error message if data failed to load
  if (!data) {
    return (
      <LinearGradient colors={["#7f5fa2", "#262066"]} style={styles.center}>
        <Text style={{ color: "white", fontSize: 18 }}>
          Could not find weather for {city}.
        </Text>
      </LinearGradient>
    );
  }

  // --- If loading is done AND data exists, render the content ---

  // It's now safe to access data properties here
  // const unixTimestamp = data.dt;
  // const date = new Date(unixTimestamp * 1000);
  // const options = { hour: "2-digit", minute: "2-digit", hour12: true };
  // const formattedTime = date.toLocaleTimeString("en-US", options);

const formattedTime = (unixTime) =>{
    const date = new Date(unixTime * 1000);
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    return date.toLocaleTimeString("en-US", options);
  }

  return (
    <LinearGradient colors={["#7f5fa2", "#262066"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.top}>{capitalizeFirstLetter(data.name)}</Text>
      <Text style={styles.time}>Last updated: {formattedTime(data.dt)}</Text>
      <View style={styles.image}>
        <Image
          style={{ width: 300, height: 300 }}
          source={{
            uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
          }}
        />
      </View>
      <View style={styles.center1}>
        <Text style={styles.temp}>{Math.round(data.main.temp)}°</Text>
      <Text style={{ fontSize: 20, color: "white", fontWeight: "400", }}>
                    {capitalizeFirstLetter(data.weather[0].description)}
                  </Text>
      </View>


      <View style={styles.container}>
        <View style={styles.tab}>
          <Text style={styles.heading}><Entypo name="water" size={16} color="#00dce6"/>  Humidity</Text>
          <Text style={styles.value}>{data.main.humidity}%</Text>
        </View>


        <View style={styles.tab}>
          <Text style={styles.heading}><FontAwesome5 name="low-vision" size={16} color="#00dff7" />  Visibility</Text>
          <Text style={styles.value}>{(data.visibility)/1000} km</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.heading}><Feather name="wind" size={16} color="#17d6fc" />  Wind Speed</Text>
          <Text style={styles.value}>{(data.wind.speed * 3.6).toFixed(1)} km/h</Text>
        </View>
      </View>





      <View style={styles.container}>
        <View style={styles.tab}>
          <Text style={styles.heading}><Feather name="sunrise" size={16} color="#f3f400" />   Sunrise</Text>
          <Text style={styles.value}>{formattedTime(data.sys.sunrise)}</Text>
        </View>


        <View style={styles.tab}>
          <Text style={styles.heading}><Feather name="sunset" size={16} color="#f6ff01" />   Sunset</Text>
          <Text style={styles.value}>{formattedTime(data.sys.sunset)}</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.heading}><FontAwesome5 name="digital-ocean" size={12} color="#00f4ff" />   Sea pressure</Text>
          <Text style={styles.value}>{data.main.sea_level} hPa</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default DeatailScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  center1: {
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    color: "white",
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
    fontWeight: "500",
  },
  time: {
    color: "lightgray",
    textAlign: "center",
    fontSize: 14,
  },
  image:{
    alignItems:'center',
    marginTop:0
  },
  temp: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  heading:{
    color: "#afaeaeff",
  },
  value:{
    color: "white",
    fontSize:18,
    fontWeight:'600'
  },
  tab:{
    alignItems:'center',
    justifyContent:'center',
    gap:10
  },
  container:{
    marginTop:40,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:30,
    paddingVertical:25,
    borderWidth:1,
    borderColor:'#727171e3',
    marginHorizontal:20,
    borderRadius:35,
    backgroundColor:'#362b70'
  }
});
