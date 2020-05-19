import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 0 20px;
  bottom: 0;
  z-index: 9999;
  height: 100px;
  width: 100%;
  background-color: #282828;
`;

export const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #fff;
  }
`;

export const MediaPlayer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    border: 0;
    background: none;

    &:hover {
      color: #fff;
    }
  }

  #controls {
    display: flex;
    justify-content: center;
  }

  #playButton {
    margin: 0 10px;
  }

  #timeline {
    display: flex;
    align-items: center;
  }

  #musicProgress {
    background-color: #ccc;
    height: 4px;
    width: 400px;
    border-radius: 6px;
    margin: 0 5px;
  }
`;

export const MediaVolume = styled.div`
  display: flex;
  align-items: center;

  div {
    border-radius: 6px;
    background-color: #ccc;
    width: 100px;
    height: 4px;
  }
`;
