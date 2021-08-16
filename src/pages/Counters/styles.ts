import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface CounterVm {
  counterValue: string;
  counterIndex: string;
  checked: boolean;
}

export const Container = styled.View`
  flex: 1;

  background: #2e8dce;
`;

export const CounterList = styled(FlatList as new () => FlatList<CounterVm>)`
  padding: 30px;
`;
