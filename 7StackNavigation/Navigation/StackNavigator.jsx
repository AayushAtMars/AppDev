import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../Screens/Profile';
// import HomeScreen from '../Screens/Home';
import BottomNav from '../components/globals/BottomNav';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name='Main' component={BottomNav} />
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
    </Stack.Navigator>
  );
}
