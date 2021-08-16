import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import { store } from '@/shared/store';

import Routes from '@/routes';

const App: React.FC = () => (
  <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
      <Routes />
    </SafeAreaView>
  </Provider>
);

export default App;
