import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import TrafficScreen from '../screens/TrafficScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const BottomTabsNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const iconName: keyof typeof FontAwesome.glyphMap = 
              route.name === 'Home' 
              ? 'home'
              : route.name == 'Traffic' 
              ? 'road': 'cogs';

        return <FontAwesome name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#6200ee',
      tabBarInactiveTintColor: 'gray'
 
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Traffic" component={TrafficScreen}/>
    <Tab.Screen name="Settings" component={SettingsScreen}/>

  </Tab.Navigator>
);

export default BottomTabsNavigator