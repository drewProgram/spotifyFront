import styled from 'styled-components';

export const Container = styled.nav`
  background-color: #040404;
  padding-top: 10px;

  .installApp {
    display: flex;
    align-items: center;
    background-color: #000;
    height: 40px;
  }

  ul {
    margin-top: 10px;
    list-style: none;
    font-weight: bold;
  }

  li {
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
    }
  }

  img {
    width: 100%;
    height: 250px;
  }

  a {
    color: #a7a7a7;
  }

  p {
    font-size: 10px;
    letter-spacing: 1px;
    color: #a7a7a7;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    margin-left: 5px;
  }
`;
