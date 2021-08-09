import React from 'react';
import { View } from 'react-native';

import { Container, CounterSequence, CounterName } from './styles';

interface CounterCardProps {
  counterSequence: number;
  counterName: string;
}

const CounterCard: React.FC<CounterCardProps> = ({
  counterSequence,
  counterName,
}) => (
  <Container>
    <CounterSequence>{`Counter ${counterSequence}`}</CounterSequence>
    <CounterName>{counterName}</CounterName>
  </Container>
);

export default CounterCard;
