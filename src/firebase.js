// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line import/no-cycle
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
export const auth = firebase.auth();
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
        dataBase.id = doc.id; // CON ESTE ACCEDEMOS A LOS ID DE NUESTROS DATOS
        const id = dataBase.id;
        postContainer.innerHTML += renderPost(dataBase, id);
        // console.log(dataBase);
      });
    });
};

// BORRA LOS POST
export const deletePost = (id) => {
  db.collection('newPost').doc(id).delete()
    .then((res) => {
      alert('Post eliminado correctamente');
    }).catch((error) => {
      alert('Ups, ocurrio un error');
    });
};

// EDITAR POST


// export const editPost = (id, Title, Subtitle, Body) => {
//   document.getElementById('title').value = Title;
//   document.getElementById('subtitle').value = Subtitle;
//   document.getElementById('body').value = Body;
//   const editButton = document.getElementById('btn');
//   editButton.innerHTML = 'Editar';

//   editButton.addEventListener('click', () => {
//     const post = db.collection('newPost').doc(id);
//     const newTitle = document.getElementById('title').value;
//     const newSubtitle = document.getElementById('subtitle').value;
//     const newBody = document.getElementById('body').value;

//     post.update({
//       Title: post.title,
//       Subtitle: post.subtitle,
//       Body: post.body,
//     })
//       .then((res) => {
//         alert('Post eliminado correctamente');
//         editButton.innerHTML = 'Publicar';
//       }).catch((error) => {
//         alert('Ups, ocurrio un error');
//       });
//   });
// };
