import React, { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

import { Container, MusicContainer } from './styles';

import api from '../../services/api';

const useStyles = makeStyles({
  root: {
    width: 170,
    backgroundColor: '#282828',
    borderRadius: 8,
    padding: '10px 0',
    marginRight: 20,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // test: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.default,
  //   padding: theme.spacing(3),
  // },
});

export default function Home() {
  // * VER DEPOIS: media query css
  const classes = useStyles();

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/songs`);

      setSongs(response.data);
    }
    loadData();
  }, []);

  return (
    <Container>
      <MusicContainer>
        <h1>Tocado recentemente</h1>

        <div id="cards">
          {songs.map(song => (
            <Card key={song.id} className={classes.root}>
              <CardContent className={classes.content}>
                <img src={song.album_image} alt="Album" />

                <div id="albumInfo">
                  <span>{song.album_name}</span>
                  <small>{song.artist}</small>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </MusicContainer>

      <MusicContainer>
        <h1>Metal</h1>

        <div id="cards">
          <Card className={classes.root}>
            <CardContent className={classes.content}>
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/8/85/Iron_Maiden_-_Piece_Of_Mind.jpg"
                alt="Album"
              />

              <div id="albumInfo">
                <span>Piece of Mind (2015)</span>
                <small>Iron Maiden</small>
              </div>
            </CardContent>
          </Card>

          <Card className={classes.root}>
            <CardContent className={classes.content}>
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/8/85/Iron_Maiden_-_Piece_Of_Mind.jpg"
                alt="Album"
              />

              <div id="albumInfo">
                <span>Piece of Mind (2015)</span>
                <small>Iron Maiden</small>
              </div>
            </CardContent>
          </Card>

          <Card className={classes.root}>
            <CardContent className={classes.content}>
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/8/85/Iron_Maiden_-_Piece_Of_Mind.jpg"
                alt="Album"
              />

              <div id="albumInfo">
                <span>Piece of Mind (2015)</span>
                <small>Iron Maiden</small>
              </div>
            </CardContent>
          </Card>

          <Card className={classes.root}>
            <CardContent className={classes.content}>
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/8/85/Iron_Maiden_-_Piece_Of_Mind.jpg"
                alt="Album"
              />

              <div id="albumInfo">
                <span>Piece of Mind (2015)</span>
                <small>Iron Maiden</small>
              </div>
            </CardContent>
          </Card>
        </div>
      </MusicContainer>
    </Container>
  );
}
