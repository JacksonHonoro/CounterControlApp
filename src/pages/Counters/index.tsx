import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CounterCard from '@/shared/components/CounterCard';
import { checkedCounter } from '@/shared/store/counterControlStore';
import EmptyList from '@/shared/components/EmptyList';

import { Container, CounterList } from './styles';

const Counters: React.FC = () => {
  const counterControls = useSelector(
    state => state?.counterControlStore?.counters,
  );
  const dispatch = useDispatch();

  const handleChecked = counterValue => {
    dispatch(checkedCounter(counterValue));
  };

  return (
    <Container>
      <CounterList
        showsVerticalScrollIndicator={false}
        keyExtractor={counter => counter.counterValue}
        data={counterControls}
        ListEmptyComponent={() => (
          <EmptyList text={'Adicione contadores na\ntela de configuração.'} />
        )}
        renderItem={({ item: counter }) => (
          <CounterCard
            key={counter.counterValue}
            onPress={() => handleChecked(counter.counterValue)}
            counterName={counter.counterValue}
            counterSequence={counter.counterIndex}
            checked={counter.checked}
          />
        )}
      />
    </Container>
  );
};

export default Counters;
