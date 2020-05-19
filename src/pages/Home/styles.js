import styled from 'styled-components';

export const Container = styled.div`
  padding: 6% 0 8% 20px;
`;

export const MusicContainer = styled.div`
  h1 {
    margin-bottom: 20px;
  }

  img {
    width: 150px;
    height: 150px;
  }

  #cards {
    display: flex;
  }

  #albumInfo {
    display: flex;
    flex-direction: column;

    span {
      color: #fff;
      font-weight: bold;
    }
  }
`;
