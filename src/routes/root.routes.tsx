import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabRoutes from '@/routes/navigators/tab.routes';

const Stack = createNativeStackNavigator();

const RootRoutes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootRoutes;
