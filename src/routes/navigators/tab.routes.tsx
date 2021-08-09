import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Counters from '@/pages/Counters';
import Config from '@/pages/Config';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="counters" component={Counters} />
    <Tab.Screen name="config" component={Config} />
  </Tab.Navigator>
);

export default TabRoutes;
