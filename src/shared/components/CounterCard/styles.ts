import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 130px;
  width: 90%;
  border-width: 2px;
  border-color: #14437a;
  border-radius: 4px;
  padding: 8px;
  background: #d8d8d8;
  margin-bottom: 24px;
  justify-content: space-between;

  ${props =>
    props.checked &&
    css`
      background: #fff;
    `}
`;

export const CounterSequence = styled.Text`
  font-size: 18px;
  color: #999;
  font-weight: bold;
`;

export const CounterName = styled.Text`
  font-size: 50px;
  font-weight: bold;
  text-align: right;
  color: #555;
`;
