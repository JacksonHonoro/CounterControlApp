import React from 'react';

import CounterCard from '@/shared/components/CounterCard';

import { Container, ScrollView } from './styles';

const Counters: React.FC = () => (
  <Container>
    <ScrollView contentContainerStyle={{ alignItems: 'flex-end' }}>
      <CounterCard counterName="0008" counterSequence={1} />
      <CounterCard counterName="0018" counterSequence={2} />
    </ScrollView>
  </Container>
);

export default Counters;
