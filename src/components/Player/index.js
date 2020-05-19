import React, { useState, useEffect } from 'react';

import {
  IoMdSkipBackward,
  IoIosPlayCircle,
  IoMdSkipForward,
  IoMdVolumeHigh,
} from 'react-icons/io';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Container, MusicInfo, MediaPlayer, MediaVolume } from './styles';

const useStyles = makeStyles({
  root: {
    width: '400px',
  },
});

export default function Player() {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);
  // const [songPlaying, setSongPlaying] = useState(false);
  // const [songPaused, setSongPaused] = useState(false);
  const songToPlay = new Audio('http://localhost:3333/file');

  // useEffect(() => {
  //   function progress() {
  //     setCompleted(oldCompleted => {
  //       if (oldCompleted === 100) {
  //         return 0;
  //       }
  //       const diff = Math.random() * 10;
  //       return Math.min(oldCompleted + diff, 100);
  //     });
  //   }

  //   const timer = setInterval(progress, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  function handleSong() {
    if (songToPlay.paused) {
      // setSongPlaying(true);
      songToPlay.play();
      // setSongPaused(false);
    } else {
      songToPlay.pause();
      // setSongPlaying(false);
      // setSongPaused(true);
    }
  }

  return (
    <Container>
      <MusicInfo>
        <span>The Trooper - 2015 Remaster</span>
        <small>Iron Maiden</small>
      </MusicInfo>

      <MediaPlayer>
        <div id="controls">
          <button type="button">
            <IoMdSkipBackward size={20} />
          </button>

          <button type="button" id="playButton" onClick={() => handleSong()}>
            <IoIosPlayCircle size={40} />
          </button>

          <button type="button">
            <IoMdSkipForward size={20} />
          </button>
        </div>

        <div id="timeline">
          <span>0:00</span>
          {/* <div id="musicProgress" /> */}
          <div className={classes.root}>
            <LinearProgress variant="determinate" value={completed} />
          </div>
          <span>4:12</span>
        </div>
      </MediaPlayer>

      <MediaVolume>
        <IoMdVolumeHigh size={20} />
        <div />
      </MediaVolume>
    </Container>
  );
}
