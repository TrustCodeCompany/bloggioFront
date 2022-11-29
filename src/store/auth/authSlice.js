//aca irá la autenticacion slice de firebase
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', // 'checking'|'not-authenticated' | 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    // creo el reducer login, internamente por defecto recibe el state y action como parametros y retorna el state modificado
    //con los nuevos valores que le paso en el payload del action que se dispara en el dispatch del login
    login: (state, { payload }) => {
      state.status = 'authenticated';
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    // lo que hice fue colocar toda mi aplicacion y mi estado a como se encuentra actualmente
    logout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload.errorMessage;
    },
    // sirve para estar verificando si la persona esta en el proceso de autenticacion o no y asi mostrarle un spinner o algo asi mientras se autentica
    checkingCredentials: (state, payload) => {
      //al acceder a este reducer se pone el estado de status a checking
      state.status = 'checking';
    },
  },
});

// // Action creators are generated for each case reducer function
// // ahora cada uno de mis reducers tienen sus acciones especificas, en este caso se llaman igual
export const { login, logout, checkingCredentials } = authSlice.actions;
