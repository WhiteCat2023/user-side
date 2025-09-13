import TabBar from '@/components/tabBar/TabBar';
import { Icon } from '@/components/ui/icon';
import { Tabs } from 'expo-router';
import React from 'react';
import {Home} from "lucide-react-native"

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "3",
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Icon as={Home} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <Icon as={Home} color={color} />,
        }}
      />
    </Tabs>
  );
}
