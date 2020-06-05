import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Menu = styled.div`
  background-color: #272A66;

  div {
    display: flex;
    flex-direction: column;

    span {
      color: #CACBDB;
    }

    footer {
      display: flex;
      background-color: #1B1751;
      justify-content: space-between;
      padding: 10px 25px;
    }
  }

  main {
    section {
      margin: 10px 0;
      display: flex;
      align-items: center;
      border: 2px solid #1B1751;
      border-left: 0;
      border-right: 0;
      padding: 5px 10px;
      color: #CACBDB;


      h2 {
        margin-left: 30px;
        font-size: 20px;
      }

    }
  }
`;

export const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px 70px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  max-width: 700px;
  background-color: #40437E;
`;

export const UserInfos = styled.div`
  .cover {
    width: 100%;
    max-height: 200px;
  }

  footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 70px;
    height: 80px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      bottom: 80px;
      
      img {
        width: 130px;
        height: 130px;
        border-radius: 50%;
      }

      h1 {
        font-size: 20px;
      }
    }
  }
`;

export const ButtonArea = styled.div`
  margin: 5px 0;
  border: 1px 0;
  border: 2px solid #1B1751;
  border-left: 0;
  border-right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 100px;

  button {
    background-color: #1B1751;
    color: #CACBDB;
    border: 0;
    width: 100%;
    border-radius: 5px;
    height: 35px;
    transition: all 0.4s;


    &:hover {
      background-color: ${darken(0.06, '#1B1751')};
    }
  }
`;

export const Feed = styled.div`
  ul {
    list-style: none;

    li {
      display: flex;
      padding: 10px 20px;

      & + li {
        border-top: 2px solid #1B1751;
      }
      
      aside {
        padding: 0 10px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }

      main {
        footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;

          div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            margin-left: 10px;
            span {
              margin-left: 5px;              
            }
          }
        }
      }
    }
  }
`;
export const Post = styled.li``;

export const PostImage = styled.div `
  margin: 10px 0;
  width: 100%;
  height: 200px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;