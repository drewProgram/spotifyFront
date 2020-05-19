import styled from 'styled-components';

export const Container = styled.header`
  background-color: #0c0c0c;
  padding: 10px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Control = styled.div`
  button {
    background: #040404;
    cursor: not-allowed;
    margin-right: 15px;
    border: 0;
    border-radius: 50%;
  }
`;

export const Profile = styled.button`
  background: #282828;
  &:hover {
    background: #f00;
  }
  display: flex;
  align-items: center;
  padding: 4px 8px 4px 4px;
  border: 0;
  border-radius: 14px;

  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  p {
    color: #fff;
    font-weight: bold;
    margin: 0 4px;
  }
`;
