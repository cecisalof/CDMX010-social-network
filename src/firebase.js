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
// firebase.analytics();
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
const postContainer = document.getElementById('printData');
export const getData = () => {
  db.collection('newPost').orderBy('Fecha')
    .onSnapshot((querySnapshot) => {
      postContainer.innerHTML = '';
      querySnapshot.forEach((doc) => {
        const dataBase = doc.data();
        postContainer.innerHTML += renderPost(dataBase);
        console.log(dataBase);
      });
    });
};

/*
  db.collection("posts").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().titulo}`);
      const dataPosts = doc.data();
      postForm.innerHTML += postCard(dataPosts);
    })
  });
*/
