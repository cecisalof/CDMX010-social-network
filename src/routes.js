/* eslint-disable no-unused-vars */
// Este es el punto de entrada de tu aplicacion
// eslint-disable-next-line import/no-cycle
import { home } from './home.js';
import { login } from './login.js';
import { postPage } from './post.js';
import { novaApp } from './auth/nova.js';
import { signIn } from './auth/signIn.js';
import { signUp } from './auth/signUp.js';
import {
  signUpWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signUpWithGoogle,
  signInWithGoogle,
}
  from './auth.js';
import { deleteModal } from './PostController/modals.js';
// import { deletePost } from './firebase.js';
// import { deletePost } from './firebase.js';

export const rootDiv = document.getElementById('root');
const modalContainer = document.getElementById('modalContainer');

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
      if (e.target.dataset.action === 'confirm') {
        const confirmId = e.target.dataset.id;
        console.log(confirmId);
        firebase.deletePost(confirmId);
        console.log('desde el escuchador de eventos', id);
      }
      // eslint-disable-next-line no-use-before-define
      eventsController(click, id);
      console.log(id);
      console.log(e.target);
    });
  });
};

const container = document.getElementById('printData');
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
      signInWithEmailAndPassword();
      break;
    case 'signIn':
      onNavigate('/signIn');
      break;
    // eslint-disable-next-line no-fallthrough
    case 'signUp':
      onNavigate('/signUp');
      break;
    case 'signUpButton':
      signUpWithEmailAndPassword();
      break;
    case 'signOut':
      signOut();
      break;
    case 'signUpWithGoogle':
      signUpWithGoogle();
      break;
    case 'signInWithGoogle':
      signInWithGoogle();
      break;
    case 'delete':
      // deletePost(id);
      deleteModal(id);
      break;
    // case 'confirm':
    //   deletePost(id);
    //   break;
    // case 'edit':
    //   editPost(id);
    //   break;
  }
};

addButtonEvents();
