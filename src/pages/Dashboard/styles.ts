import styled from 'styled-components';

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
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }

      h1 {
        font-size: 20px;
      }
    }
  }
`;

