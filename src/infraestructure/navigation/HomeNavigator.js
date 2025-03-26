import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../../features/home/screens/HomeScreen';
import { HomeDetailScreen } from '../../features/home/screens/HomeDetailScreen';

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: true }}>
      <HomeStack.Screen name="SOLICITANTES" component={HomeScreen} />
      <HomeStack.Screen name="INFO DEL SOLICITANTE" component={HomeDetailScreen} />
    </HomeStack.Navigator>
  );
};