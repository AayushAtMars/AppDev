import { View, Text, StyleSheet, Image, TextInput, Keyboard, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { router, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import axios from "axios";

const second = () => {



  const [city, setCity] = useState("chandigarh");
  const [searchInput, setSearchInput] = useState("Chandigarh");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  const apiKey = process.env.EXPO_PUBLIC_WEATHER_API;


  function capitalizeFirstLetter(word) {
  if (!word) return ""; // handle empty string
  return word.charAt(0).toUpperCase() + word.slice(1);
}



  useEffect(() => {
    const fetchData = async () => {
      if (!city) return;
      setLoading(true); // Start loading
      setData(null); // Clear previous data
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const Weatherdata = response.data;
        setData(Weatherdata);
        console.log(Weatherdata);
      } catch (err) {
        console.log(err);
      }finally {
        setLoading(false); // Stop loading, whether success or fail
      }
    };
    fetchData()
  }, [city]);

  const handleSearch = () => {
    setCity(searchInput); // Update 'city' to trigger the useEffect
    Keyboard.dismiss();
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.top}>
        <Text style={styles.logo}>Weather</Text>
        <Image
          style={styles.threedot}
          source={require("../../assets/images/threedots.png")}
          resizeMode="contain"
        />
      </View>

      <View style={styles.searchBox}>
        <FontAwesome name="search" size={16} color="#000000" />
        <TextInput
          placeholder="Search for a city"
          value={searchInput}
          onChangeText={setSearchInput}
          onSubmitEditing={handleSearch} // Call handleSearch on submit
        ></TextInput>
      </View>

       {/* --- CONDITIONAL RENDERING --- */}
      {/* Show a loading message while fetching */}
      {loading && <Text style={styles.infoText}>Loading...</Text>}

      {/* Only render the card if data exists AND we are not loading */}
      {data && !loading && (
        <TouchableOpacity
        onPress={()=>router.push(`/${city}`)}
        >
          <LinearGradient style={styles.card} colors={["#596d85", "#435674"]}>
        <View style={styles.header}>
          <View>
            <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>
              {capitalizeFirstLetter(city)}
            </Text>
            <Text style={{ fontSize: 14, color: "white", fontWeight: "400" }}>
              {capitalizeFirstLetter(data.weather[0].main)}
            </Text>
          </View>
          <Text style={{ fontSize: 24, color: "white", fontWeight: "600" }}>
            {Math.round(data.main.temp)+'°'}
          </Text>
        </View>

        <View>
          <Image
            style={{ width: 160, height: 160 }}
            // source={require("../../assets/images/rainySunny.png")}
            source={{uri:`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}}
          />
        </View>
      </LinearGradient>
        </TouchableOpacity>
      )}

      {/* Show an error message if loading is finished but there's still no data */}
      {!data && !loading && <Text style={styles.infoText}>City not found.</Text>}

    </View>
  );
};

export default second;

const styles = StyleSheet.create({
  top: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  logo: {
    fontSize: 25,
    fontWeight: "bold",
  },
  threedot: {
    width: 20,
    height: 20,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 5,
    marginHorizontal: 20,
    backgroundColor: "#eef2f5",
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 30,
  },
  header: {
    gap: 10,
  },
  infoText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: 'gray'
  },
});
