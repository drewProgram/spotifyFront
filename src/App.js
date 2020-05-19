import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

// import Routes from './routes';
// import Header from './components/Header';
// import Menu from './components/Menu';
import Player from './components/Player';
import MenuLayout from './components/MenuLayout';

import GlobalStyle from './styles/global';

function App() {
  return (
    // <Provider>
    <BrowserRouter>
      <MenuLayout />
      {/* <Routes /> */}
      <Player />
      <GlobalStyle />
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
