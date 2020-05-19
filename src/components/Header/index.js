import React from 'react';

import {
  IoIosArrowDown,
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';
import { Container, Content, Control, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <Control>
          <button type="button">
            <IoIosArrowBack size={30} />
          </button>
          <button type="button">
            <IoIosArrowForward size={30} />
          </button>
        </Control>

        <Profile type="button">
          <img
            src="https://1.bp.blogspot.com/-gVy76NKQI18/W1cdmaDW6tI/AAAAAAAAl5A/qw4XxUeR_QYwY7M0cVMLfZ4O-5c1HveWQCLcBGAs/s1600/merlin-o-mago.jpg"
            alt="profile"
          />
          <p>Andrew Las Casas</p>
          <IoIosArrowDown size={25} />
        </Profile>
      </Content>
    </Container>
  );
}
