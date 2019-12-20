import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Routes from './routes';

import Header from './components/Header';
// import { Container } from './styles';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
