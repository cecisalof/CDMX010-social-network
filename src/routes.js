/* eslint-disable no-unused-vars */
// Este es el punto de entrada de tu aplicacion
// eslint-disable-next-line import/no-cycle
import { home } from './home.js';
import { login } from './login.js';
import { postPage } from './post.js';
import { novaApp } from './auth/nova.js';
import { signIn } from './auth/signIn.js';
import { signUp } from './auth/signUp.js';
import { deleteModal } from './PostController/modals.js';

export const rootDiv = document.getElementById('root');
const modalContainer = document.getElementById('modalContainer');

// aquí inyectamos la dependencia a este archivo (routes) y se la pasa a los componentes con onNavigate
let firebase;
export const loadFirebase = (firebaseFromApp) => {
  firebase = firebaseFromApp;
};

export const makingPost = () => {
  const titleCard = document.getElementById('title');
  const subtitleCard = document.getElementById('subtitle');
  const bodyCard = document.getElementById('body');

  // postButton.addEventListener('click', (e) => {
  //   e.preventDefault();

  const post = {
    title: titleCard.value,
    subtitle: subtitleCard.value,
    body: bodyCard.value,
    fecha: Date.now(),
    Like: [],
  };

  if (!titleCard.value.trim() || !subtitleCard.value.trim() || !bodyCard.value.trim()) {
    alert('Input vacío!');
    return;
  }

  firebase.savePost(post)
    .then((doc) => {
      console.log('Document written whith ID: ', doc.id);
      titleCard.value = '';
      subtitleCard.value = '';
      bodyCard.value = '';
    })
    .catch((error) => console.log(error));
};

export const routes = {
  '/': novaApp,
  '/home': home,
  '/login': login,
  '/post': postPage,
  '/signIn': signIn,
  '/signUp': signUp,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  const view = routes[pathname];
  view(rootDiv, firebase);
  // homeView(rootDiv);
};

// Esta es la aplicación que itera con los los targets donde se ejecuta la acción
const addButtonEvents = () => {
  const parentContainer = document.querySelectorAll('#root');
  parentContainer.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const click = e.target.dataset.action;
      const id = e.target.dataset.id;
      // if (e.target.dataset.action === 'confirm') {
      //   // const confirmId = e.target.dataset.id;
      //   // console.log(confirmId);
      //   firebase.deletePost(id);
      //   // console.log('desde el escuchador de eventos', id);
      // } else if (e.target.dataset.action === 'like') {
      //   // const likeId = e.target.dataset.id;
      //   // console.log(likeId);
      //   firebase.likesCounter(id);
      // }
      // eslint-disable-next-line no-use-before-define
      eventsController(click, id);
      console.log('postID', id);
      console.log(e.target);
    });
  });
};

// const container = document.getElementById('printData');
// Esta es la aplicación que genera el routing
const eventsController = (e, id) => {
  // eslint-disable-next-line default-case
  switch (e) {
    case 'novaApp':
      onNavigate('/');
      break;
    case 'home':
      // eslint-disable-next-line no-unused-expressions
      onNavigate('/home');
      break;
    // eslint-disable-next-line no-fallthrough
    case 'login':
      onNavigate('/login');
      break;
    // eslint-disable-next-line no-fallthrough
    case 'post':
      onNavigate('/post');
      break;
    // eslint-disable-next-line no-fallthrough
    case 'saveButton':
      makingPost();
      break;
    // eslint-disable-next-line no-fallthrough
    case 'signInUser':
      firebase.signInWithEmailAndPassword();
      break;
    case 'signIn':
      onNavigate('/signIn');
      break;
    // eslint-disable-next-line no-fallthrough
    case 'signUp':
      onNavigate('/signUp');
      break;
    case 'signUpButton':
      firebase.signUpWithEmailAndPassword();
      break;
    case 'signOut':
      firebase.signOut();
      break;
    case 'signUpWithGoogle':
      firebase.signUpWithGoogle();
      break;
    case 'signInWithGoogle':
      firebase.signUpWithGoogle();
      break;
    case 'delete':
      // deletePost(id);
      deleteModal(id, firebase); // aqui necesitamos pasar firebase
      break;
    // case 'confirm':
    //   deletePost(id);
    //   break;
    // case 'edit':
    //   editPost(id);
    //   break;
    case 'like':
      firebase.likesCounter(id);
      break;
  }
};

addButtonEvents();
