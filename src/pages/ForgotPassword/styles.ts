import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #40437E;
  width: 600px;

  @media (max-width: 628px){
    width: 95%;
    padding: 30px 10px;
  }

  padding: 30px 0;
  box-shadow: 2px 2px rgba(0,0,0,0.3);

  animation: ${appearFromLeft} 1s;

  form {
    width: 500px;
    text-align: center;

    @media (max-width: 628px){
      width: 85%;
    }

    h1 {
      margin-bottom: 10px;
      color: #CACBDB;
    }

    h2 {
      margin-bottom: 30px;
      font-size: 16px;
      color: #CACBDB;

      @media (max-width: 345px){
        font-size: 14px;
      }
    }

    a {
      color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: 0.2s color;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }

  > a {
    color: #312e38;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: 0.2s color;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#F4EDE8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
