// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { renderPost } from './home.js';

const firebaseConfig = {

  apiKey: 'AIzaSyCE3V_6hn_oiPhJAvfRLJLygBVct9fIZRg',
  authDomain: 'novaapp-67e15.firebaseapp.com',
  projectId: 'novaapp-67e15',
  storageBucket: 'novaapp-67e15.appspot.com',
  messagingSenderId: '282489634860',
  appId: '1:282489634860:web:97a4ad5b81716f2b0f5189',
  measurementId: 'G-N31JQDJTSM',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// eslint-disable-next-line no-unused-vars
export const db = firebase.firestore();

// GUARDA INFORMACIÓN DE USUARIIO EN LA BASE DE DATOS.
export const savePost = (post) => db.collection('newPost')
  .add({
    Title: post.title,
    Subtitle: post.subtitle,
    Body: post.body,
    Fecha: Date.now(),
  });

// TRAE LA DATA DE LA BASE DE DATOS.
export const getData = () => {
  const postContainer = document.getElementById('printData');
  db.collection('newPost').orderBy('Fecha', 'desc')
    .onSnapshot((querySnapshot) => {
      postContainer.innerHTML = '';
      querySnapshot.forEach((doc) => {
        const dataBase = doc.data();
        postContainer.innerHTML += renderPost(dataBase);
        // console.log(dataBase);
      });
    });
};

// // AUTH FROM FIREBASE
// firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((user) => {
//     // Signed in
//     // ...
//   })
//   .catch((error) => {
//     let errorCode = error.code;
//     let errorMessage = error.message;
//     // ..
//   });

// // SIGN-IN
// firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((user) => {
//     // Signed in
//     // ...
//   })
//   .catch((error) => {
//     let errorCode = error.code;
//     let errorMessage = error.message;
//   });

// // SIGN-OUT
// firebase.auth().signOut().then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });
