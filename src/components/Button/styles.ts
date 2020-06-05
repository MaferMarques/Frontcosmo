import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background-color: #CACBDB;
  height: 46px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: 0.2s all;

  &:hover {
    background: ${shade(0.2, '#CACBDB')};
  }
`;

