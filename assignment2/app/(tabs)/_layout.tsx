import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Feather from '@expo/vector-icons/Feather'



export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
        },
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color="#00000" />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'cart',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cart-outline" size={24} color="#00000" />
,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="face-man" size={24} color="#0000" />

,
        }}
      />
    </Tabs>
  );
}
