import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Home from "../../Screens/Home";
import Plan from "../../Screens/Plan";
import Stats from "../../Screens/Stats";
import Profile from "../../Screens/Profile";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") iconName = focused ? "home" : "home-outline";
          else if (route.name === "Plan") iconName = focused ? "grid" : "grid-outline";
          else if (route.name === "Stats") iconName = focused ? "bar-chart" : "bar-chart-outline";
          else if (route.name === "Profile") iconName = focused ? "person" : "person-outline";

          return (
            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
              <Ionicons
                name={iconName}
                size={22}
                color={focused ? "#000" : "#fff"}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Plan" component={Plan} />
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    // position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#0D0D15",
    borderRadius: 35,
    height: 70,
    borderTopWidth: 0,
    elevation: 8,
    paddingHorizontal: 25,
    paddingTop:15,
    marginHorizontal:30
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
  },
  activeIcon: {
    backgroundColor: "#fff",
    borderRadius: 22.5,
  },
});
