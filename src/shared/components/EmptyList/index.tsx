import React from 'react';

import { Container, SimpleText } from './styles';

interface EmptyListProps {
  text: string;
}

const EmptyList: React.FC<EmptyListProps> = ({ text }) => {
  return (
    <Container>
      <SimpleText>{text || 'Sem Registros!'}</SimpleText>
    </Container>
  );
};

export default EmptyList;
