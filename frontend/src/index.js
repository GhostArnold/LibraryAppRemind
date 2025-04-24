import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './redux/store';
// Сброс базовых стилей
import 'normalize.css';
import App from './App/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Предоставляет Redux-стор (store) всему приложению
  <Provider store={store}>
    <App />
  </Provider>
);
