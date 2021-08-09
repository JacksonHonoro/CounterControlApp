import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text, View } from 'react-native';
import Counters from '@/pages/Counters';
import Config from '@/pages/Config';

const CounterStack = createNativeStackNavigator();
const ConfigStack = createNativeStackNavigator();

function Header({ pageTitle }) {
  return (
    <View
      style={{
        height: 90,
        backgroundColor: '#011E46',
        justifyContent: 'flex-end',
        padding: 10,
      }}
    >
      <Text style={{ color: '#fff', fontSize: 24 }}>{pageTitle}</Text>
    </View>
  );
}

const CounterStackRoutes: React.FC = () => (
  <CounterStack.Navigator
    screenOptions={({ route }) => ({
      header: props => <Header pageTitle={route?.name} />,
    })}
  >
    <CounterStack.Screen
      name="Counters"
      component={Counters}
      options={{ title: 'teste' }}
    />
  </CounterStack.Navigator>
);

const ConfigStackRoutes: React.FC = () => (
  <ConfigStack.Navigator
    screenOptions={({ route }) => ({
      header: props => <Header pageTitle={route?.name} />,
    })}
  >
    <ConfigStack.Screen name="Config" component={Config} />
  </ConfigStack.Navigator>
);

export { CounterStackRoutes, ConfigStackRoutes };
