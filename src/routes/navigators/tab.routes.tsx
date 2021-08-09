import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CounterStackRoutes, ConfigStackRoutes } from './stack.routes';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Counters" component={CounterStackRoutes} />
    <Tab.Screen name="Config" component={ConfigStackRoutes} />
  </Tab.Navigator>
);

export default TabRoutes;
