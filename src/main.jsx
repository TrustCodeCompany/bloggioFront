import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { BlogApp } from './BlogApp';
import { store } from './store';
import './assets/scss/styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* En este caso se debe poner el Provider DE REDUX en la parte mas alta de la aplicacion */}
    <Provider store={store}>
      <BrowserRouter>
        <BlogApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
