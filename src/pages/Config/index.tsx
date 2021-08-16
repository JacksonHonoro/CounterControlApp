import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';

import {
  Container,
  ButtonArea,
  CounterArea,
  Title,
  SelectCounterArea,
  CounterControlCard,
  CounterControlContent,
  Icon,
} from './styles';
import {
  addCounter,
  removeCounter,
  removeAllCounters,
} from '@/shared/store/counterControlStore';

const Config: React.FC = () => {
  const [counterValue, setCounterValue] = useState<number>(1);
  const [counterIndex, setCounterIndex] = useState<number>(1);
  const dispatch = useDispatch();

  const handleAddCounter = () => {
    const counterValueFormatted = `0000${counterValue}`.slice(-4);
    const data = {
      counterValue: counterValueFormatted,
      counterIndex,
    };
    dispatch(addCounter(data));
    setCounterIndex(prevState => prevState + 1);
  };

  const handleRemoveCounter = () => {
    const counterValueFormatted = `0000${counterValue}`.slice(-4);
    const data = {
      counterValue: counterValueFormatted,
    };
    dispatch(removeCounter(data));
  };

  const handleResetCounter = () => {
    setCounterIndex(1);
    setCounterValue(1);
    dispatch(removeAllCounters());
  };

  return (
    <Container>
      <CounterArea>
        <Title>Counters</Title>
        <ButtonArea>
          <Button onPress={() => handleAddCounter()}>Add{'\n'}Counter</Button>
          <Button onPress={() => handleRemoveCounter()}>
            Remove{'\n'}Counter
          </Button>
          <Button onPress={() => handleResetCounter()}>
            Reset{'\n'}Counter
          </Button>
        </ButtonArea>
      </CounterArea>

      <SelectCounterArea>
        <Title>Selected Counter</Title>
        <CounterControlCard>
          <CounterControlContent>
            <Icon
              name="minus"
              size={30}
              onPress={() => {
                if (counterValue > 1) {
                  setCounterValue(prevState => Number(prevState) - 1);
                }
              }}
            />
            <Input
              onChangeText={value => setCounterValue(value)}
              keyboardType="numeric"
              maxLength={4}
            >
              {Number(counterValue)}
            </Input>

            <Icon
              name="plus"
              size={30}
              onPress={() => {
                setCounterValue(prevState => Number(prevState) + 1);
              }}
            />
          </CounterControlContent>
        </CounterControlCard>
      </SelectCounterArea>
    </Container>
  );
};

export default Config;
