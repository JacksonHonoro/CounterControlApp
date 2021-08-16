import React from 'react';

import { Container, CounterSequence, CounterName } from './styles';

interface CounterCardProps {
  counterSequence: number;
  counterName: string;
  checked: boolean;
  onPress: () => void;
}

const CounterCard: React.FC<CounterCardProps> = ({
  counterSequence,
  counterName,
  checked,
  onPress,
}) => (
  <Container checked={checked} onPress={onPress}>
    <CounterSequence>{`Counter ${counterSequence}`}</CounterSequence>
    <CounterName>{counterName}</CounterName>
  </Container>
);

export default CounterCard;
