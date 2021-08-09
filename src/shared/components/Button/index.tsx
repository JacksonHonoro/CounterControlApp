import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  children: string[];
  onPress: () => void;
  loadColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  loading,
  loadColor,
  ...rest
}) => (
  <Container onPress={onPress} style={{ opacity: loading ? 0.5 : 1 }} {...rest}>
    {loading ? (
      <ActivityIndicator color={loadColor || '#fff'} />
    ) : (
      <Text>{children}</Text>
    )}
  </Container>
);

export default Button;
