import { createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

const counterControlStore = createSlice({
  name: 'counterControlStore',
  initialState: {
    counters: [],
  },
  reducers: {
    addCounter(state, action) {
      const findCounter = state.counters.find(
        element => action.payload.counterValue === element.counterValue,
      );

      if (!findCounter) {
        state.counters.unshift(action.payload);
        Alert.alert('Contador adicionado!');
      } else {
        Alert.alert(
          'Contador duplicado!',
          'Você está tentando adicionar um contador que já existe.',
        );
      }
    },

    removeCounter(state, action) {
      const findCounterIndex = state.counters.findIndex(
        element => action.payload.counterValue === element.counterValue,
      );
      if (!findCounterIndex) {
        state.counters.splice(findCounterIndex, 1);
        Alert.alert('Contador removido!');
      } else {
        Alert.alert(
          'Contador não encontrado',
          'Este contador não existe para ser excluído.',
        );
      }
    },

    checkedCounter(state, action) {
      const findCounterIndex = state.counters.findIndex(
        element => action.payload === element.counterValue,
      );
      console.log(findCounterIndex);
      if (findCounterIndex) {
        state.counters[findCounterIndex].checked =
          !state.counters[findCounterIndex].checked;
      }
    },

    removeAllCounters(state) {
      if (state.counters.length > 0) {
        state.counters = [];
        Alert.alert('Todos contadores foram removidos!');
      } else {
        Alert.alert('Não existe contadores!');
      }
    },
  },
});

export const { addCounter, removeCounter, checkedCounter, removeAllCounters } =
  counterControlStore.actions;
export default counterControlStore.reducer;
