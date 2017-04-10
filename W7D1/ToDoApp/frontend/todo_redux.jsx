import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore;
  console.log(store);
  window.store = store;
  const root = document.getElementById('root');
});
