/* cuando uno crea un archivo thunks.js normalmente es porque se va a definir
una tarea asincrona, si son sincronas se puede hacer directamente con reducers */

// import { checkingCredentials, login, logout } from './';
// import { singInWithGoogle } from '../../firebase/providers.js';

// vamos a hacer el checking de las credenciles para esto necesito el dispatch creado en authSlice.js
// export const checkingAuthentication = (email, password) => {
//   return async dispatch => {
//     // este dispatch a checkingCredentials permite utilizar la accion que pone el estado de la apliccion en LOADING
//     dispatch(checkingCredentials());
//   };
// };

// // creo el Thunk para el login con GOOGLE
// export const startGoogleSignIn = () => {
//   return async dispatch => {
//     // este dispatch a checkingCredentials permite utilizar la accion que pone el estado de la apliccion en LOADING
//     dispatch(checkingCredentials());

//     // llamo a la funcion que me permite autenticarme con google, esta funcion esta creada en providers
//     const result = await singInWithGoogle();
//     if (!result.ok) return dispatch(logout(result.errorMessage));

//     //en caso todo sale bien, llamo a la acción (dispatch) login que esta creada en authSlice.js
//     dispatch(login(result));
//   };
// };
