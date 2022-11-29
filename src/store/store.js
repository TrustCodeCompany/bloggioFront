// aca va el codigo de la store de redux y es como quiero que luzca mi fuente UNICA DE LA VERDAD
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';

export const store = configureStore({
  reducer: {
    //aca agrego el store creado en el archivo authSlice.js y lo llamo auth para que quede mas claro que es el store de autenticacion y no de otra cosa que pueda
    //tener en el futuro en la store de redux como por ejemplo el store de productos o el store de usuarios o el store de pedidos
    auth: authSlice.reducer,
  },
});
