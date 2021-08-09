import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import OctIcon from 'react-native-vector-icons/Octicons';

import { CounterStackRoutes, ConfigStackRoutes } from './stack.routes';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="TabCounters"
      component={CounterStackRoutes}
      options={{
        title: 'Counters',
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MatIcon name="counter" size={24} color="#0f13e0" />
          ) : (
            <MatIcon name="counter" size={22} color="#434343" />
          ),
      }}
    />
    <Tab.Screen
      name="TabConfig"
      component={ConfigStackRoutes}
      options={{
        title: 'Config',
        tabBarIcon: ({ focused }) =>
          focused ? (
            <OctIcon name="settings" size={24} color="#0f13e0" />
          ) : (
            <OctIcon name="settings" size={22} color="#434343" />
          ),
      }}
    />
  </Tab.Navigator>
);

export default TabRoutes;
