import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';

import counterControlStore from './counterControlStore';

const reducers = combineReducers({
  counterControlStore,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({});

    return middlewares;
  },
});

export { store };
