/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
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

// GUARDA INFORMACIÓN DE USUARIIO EN LA BASE DE DATOS
export const savePost = (post) => db.collection('newPost')
  .add({
    Title: post.title,
    Subtitle: post.subtitle,
    Body: post.body,
    Fecha: Date.now(),
  });

export const getPost = () => {
  db.collection('newPost')// .orderBy('fecha')
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const dataBase = doc.data();
        return dataBase;
      });
    });
};
getPost();

// // eslint-disable-next-line no-unused-vars
// const showingPosts = () => {
//   // eslint-disable-next-line prefer-const
//   let post = [];
//   for (const i in db.collection('newPost')) {
//     post.push(db.title[i].newPost);
//   }
//   console.log(post);
// };
// showingPosts();
