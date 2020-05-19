import React from 'react';
import { Link } from 'react-router-dom';
import { FaSpotify } from 'react-icons/fa';
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdAddBox,
  MdFileDownload,
} from 'react-icons/md';
import { IoIosHeart } from 'react-icons/io';
import { Container, Logo } from './styles';

export default function Menu() {
  return (
    <Container>
      <Link to="/">
        <Logo>
          <FaSpotify size={40} color="#fff" />
          <h1>Spotify</h1>
        </Logo>
      </Link>

      <ul>
        <li>
          <Link to="/">
            <MdHome size={30} />
            <span>Início</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <MdSearch size={30} />
            <span>Buscar</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <MdLibraryMusic size={30} />
            <span>Sua Biblíoteca</span>
          </Link>
        </li>
      </ul>

      <br />
      <p>PLAYLISTS</p>

      <ul>
        <li>
          <Link to="/">
            <MdAddBox size={30} />
            Criar playlist
          </Link>
        </li>
        <li>
          <Link to="/">
            <IoIosHeart size={30} />
            Músicas Curtidas
          </Link>
        </li>
      </ul>

      <div className="installApp">
        <a
          href="https://www.spotify.com/br/download/windows/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdFileDownload size={20} />
          Instalar aplicativo
        </a>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/pt/8/85/Iron_Maiden_-_Piece_Of_Mind.jpg"
        alt="Album"
      />
    </Container>
  );
}
