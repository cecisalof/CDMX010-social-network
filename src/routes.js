/* eslint-disable no-unused-vars */
// Este es el punto de entrada de tu aplicacion
// eslint-disable-next-line import/no-cycle
import { home } from './home.js';
import { login } from './login.js';
import { postPage } from './post.js';
import { novaApp } from './auth/nova.js';
import { signIn } from './auth/signIn.js';
import { signUp } from './auth/signUp.js';
import { deleteConfirmation, editConfirmation } from './PostController/modals.js';

export const rootDiv = document.getElementById('root');
const modalContainer = document.getElementById('modalContainer');

// aquí inyectamos la dependencia a este archivo (routes) y se la pasa a los componentes con onNavigate
let firebase;
export const loadFirebase = (firebaseFromApp) => {
  firebase = firebaseFromApp;
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
      firebase.makingPost();
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
      deleteConfirmation(id, firebase); // aqui necesitamos pasar firebase
      break;
    case 'edit':
      editConfirmation(id, firebase);
      break;
    case 'like':
      firebase.likesCounter(id);
      break;
  }
};

addButtonEvents();
