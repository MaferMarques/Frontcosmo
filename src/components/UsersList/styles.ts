import styled from 'styled-components';

export const Container = styled.div`
  ul {
    display: flex;
    list-style: none;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      background-color: #272A66;
      padding-bottom: 2px;
      
      & + li {
        margin-left: 5px;
      }

      img {
        width: 100%;
    }
  }
`;
