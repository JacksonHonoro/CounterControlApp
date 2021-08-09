import React from 'react';
import { View, Text } from 'react-native';

import Button from '@/shared/components/Button';

import {
  Container,
  ButtonArea,
  CounterArea,
  Title,
  SelectCounterArea,
} from './styles';

const Config: React.FC = () => (
  <Container>
    <CounterArea>
      <Title>Counters</Title>
      <ButtonArea>
        <Button onPress={() => console.log('add')}>Add{'\n'}Counter</Button>
        <Button onPress={() => console.log('remove')}>
          Remove{'\n'}Counter
        </Button>
      </ButtonArea>
    </CounterArea>
    <SelectCounterArea>
      <Title>Selected Counter</Title>
      <View />
    </SelectCounterArea>
  </Container>
);

export default Config;
