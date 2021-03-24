// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line import/no-cycle
import { renderPost } from './home.js';
// import { deleteConfirmation } from './PostController/deleteConfirmation.js';

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

// // The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
// // eslint-disable-next-line import/no-unresolved
// const functions = require('firebase-functions');
// // The Firebase Admin SDK to access Firestore.
// // eslint-disable-next-line import/no-unresolved
// const admin = require('firebase-admin');

// admin.initializeApp();

// export const currentPost = (id) => db.collection('newPost').doc(id).get();

// GUARDA INFORMACIÓN DE USUARIIO EN LA BASE DE DATOS.
export const savePost = (post) => db.collection('newPost')
  .add({
    Title: post.title,
    Subtitle: post.subtitle,
    Body: post.body,
    Fecha: Date.now(),
    Like: [],
  });

// TRAE LA DATA DE LA BASE DE DATOS.
export const getData = () => {
  const postContainer = document.getElementById('printData');
  db.collection('newPost').orderBy('Fecha', 'desc')
    .onSnapshot((querySnapshot) => {
      postContainer.innerHTML = '';
      querySnapshot.forEach((doc) => {
        // console.log(doc);
        const dataBase = doc.data();
        // console.log(doc.data());
        dataBase.id = doc.id; // CON ESTE ACCEDEMOS A LOS ID DE NUESTROS POST
        const id = dataBase.id; // AQUÍ arroja el ID del post
        postContainer.innerHTML += renderPost(dataBase, id);
        // console.log(dataBase);
      });
    });
};

// BORRA LOS POST
export const deletePost = (id) => {
  // console.log('We are inside deletePost');
  db.collection('newPost').doc(id).delete()
    .then(() => {
      console.log('Post was deleted in firebase console');
    })
    .catch((error) => {
      console.log('An error have ocurred!');
    });
  // console.log(id);
};

const currentPost = (id) => db.collection('newPost').doc(id).get();
const postRef = (id) => db.collection('newPost').doc(id);

export const likesCounter = (id) => {
  const userId = auth.currentUser.uid;
  console.log(userId);
  // const currentPost = (id) => db.collection('newPost').doc(id).get();
  currentPost(id)
    .then((doc) => {
      const postData = doc.data();
      console.log(postData);
      const likeArray = postData.Like;
      console.log(likeArray);
      const likeViewer = likeArray.includes(userId);
      // likeArray.push(userId);
      // console.log(likeArray.length);
      // // const likeCounts = likeArray.length;
      // // likeContainer.innerHTML = likeArray.length;

      if (likeViewer === false) {
        postRef(id).update({ Like: firebase.firestore.FieldValue.arrayUnion(userId) });
      } else {
        postRef(id).update({ Like: firebase.firestore.FieldValue.arrayRemove(userId) });
      }
    })
    .catch((error) => {
      console.log('An error has ocurred!');
    });
};



  // .then((doc) => {
  //   const userEmail = auth.currentUser.email; // Accedemos al correo de nuestro usuario
  //   console.log(userEmail);
  //   const likesArray = doc.data().Like; // accedes al array de likes
  //   console.log(likesArray);
  //   //         editButton.innerHTML = 'Publicar';
  //   const cantLikes = document.getElementById('likesNumber'); // Este es el que va a ir cambiando
  //   //       }).catch((error) => {
  //   console.log(likesArray.Like);
  //   const likeCounter = db.FieldValue.increment(1);
  //   //         alert('Ups, ocurrio un error');
  //   // const iterador = likesArray.includes(userEmail);
  //   // //       });
  //   // if (iterador === false) {
  //   //   //   });
  //   //   likesArray.push(userEmail);
  //   //   // };
  //   //   console.log(likesArray.length);
  //   // }
  //   cantLikes.innerHTML = likesArray.length;
  //   console.log(likesArray);
  // });
// };



// const updateLike = (id, email) => db.collection('newPost').doc(id).update({ Like: db.FieldValue.arrayUnion(email) });
// const updateDislike = (id, email) => db.collection('newPost').doc(id).update({ Like: db.FieldValue.arrayRemove(email) });
// export const likes = (id) => {
//   currentPost(id)
//     .then((doc) => {
//       const userEmail = auth.currentUser.email; // Accedemos al correo de nuestro usuario
//       // console.log(userEmail);
//       const likesArray = doc.data().Like; // accedes al array de likes
//       // console.log(likesArray);
//       const cantLikes = document.getElementById('likesNumber'); // Este es el que va a ir cambiando
//       // console.log(likesArray.Like);
//       const iterador = likesArray.includes(userEmail);
//       if (iterador === false) {
//         // likesArray.unshift(userEmail);
//         updateLike(id, userEmail);
//         console.log(likesArray.length);
//       } else {
//         updateDislike(id, userEmail);
//         console.log(likesArray.length);
//       }
//       cantLikes.innerHTML = likesArray.length;
//       console.log(likesArray);
//     });
// };

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
