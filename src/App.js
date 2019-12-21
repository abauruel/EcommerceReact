import React from 'react';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';
import { Router } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Routes from './routes';
import history from './services/history';

import Header from './components/Header';
// import { Container } from './styles';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ToastContainer autoClose={3000} />
        <GlobalStyles />
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}
