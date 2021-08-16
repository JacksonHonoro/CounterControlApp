import styled from 'styled-components/native';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
  padding: 12px;
  background: #2e8dce;
`;

export const ButtonArea = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const CounterArea = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const SelectCounterArea = styled.View`
  flex: 1;
`;

export const CounterControlCard = styled.View`
  flex: 1;
  border-width: 0.25px;
  border-radius: 4px;
  align-items: center;
  background: #eee;
`;

export const CounterControlContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Icon = styled(MatIcon)`
  margin: 0 28px;
`;
