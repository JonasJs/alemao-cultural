import { initializeApp } from 'firebase';

// Inicializa o firebase
const app = initializeApp({
  apiKey: "AIzaSyAL28oNJaiiuI2gO-gcJ2CI6qFYD4NxaMc",
  authDomain: "alemao-cd4c7.firebaseapp.com",
  databaseURL: "https://alemao-cd4c7.firebaseio.com",
  projectId: "alemao-cd4c7",
  storageBucket: "alemao-cd4c7.appspot.com",
  messagingSenderId: "190411125455"

});
// Conecta com o db
export const db = app.database();
export const auth = app.auth();
// Faz referencia
export const eventRef = db.ref('events');
