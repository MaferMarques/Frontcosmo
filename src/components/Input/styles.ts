import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: Boolean;
  isFilled: Boolean;
  isErrored: Boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #CACBDB !important;
  border-radius: 8px;
  padding: 10px;
  width: 100%;

  border: 2px solid #CACBDB;
  color: #666360;


  display: flex;
  align-items: center;
  transition: all 0.4s;

  & + div {
    margin-top: 8px;
  }

  ${props => props.isErrored && css`
    border-color: #c53030;
 `}

 ${props => props.isFocused && css`
    color: #40437E;
    border-color: #40437E;
 `}

 ${props => props.isFilled && css`
    color: #40437E;
 `}
 
  input {
    flex: 1;
    @media (max-width: 383px){
      width: 50%;
      margin-left: 16px;
    }
    
    background: transparent;
    border: 0;
    color: #222;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
    @media (max-width: 383px){
      margin-right: 0px;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;