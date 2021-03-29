/* eslint-disable no-unused-vars */
// Este es el punto de entrada de tu aplicacion
// eslint-disable-next-line import/no-cycle
import { home } from './views/home.js';
import { login } from './views/login.js';
import { postPage } from './views/post.js';
import { novaApp } from './auth/nova.js';
import { signIn } from './auth/signIn.js';
import { signUp } from './auth/signUp.js';
import { deleteConfirmation, editConfirmation } from './PostController/modals.js';

export const rootDiv = document.getElementById('root');

// aquí inyectamos la dependencia a este archivo (routes)
// y éste se la pasa a los componentes con onNavigate
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
  window.history.pushState( // crea y activa un registro en la sesión de historial del navegador.
    {},
    pathname,
    window.location.origin + pathname,
  );

  const view = routes[pathname];
  view(rootDiv, firebase);
  // homeView(rootDiv);
};

// Se activa cuando cambia la entrada del historial actual a la de la última página
// que visitó el usuario. Para renderizr el contenido del nuevo path
window.onpopstate = () => {
  const homeView = routes[window.location.pathname]; // to render the page
  homeView(rootDiv, firebase);
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

// Esta es la aplicación que genera el routing
const eventsController = (e, id) => {
  // eslint-disable-next-line default-case
  switch (e) {
    case 'novaApp':
      onNavigate('/');
      break;
    case 'home':
      onNavigate('/home');
      break;
    case 'login':
      onNavigate('/login');
      break;
    case 'post':
      onNavigate('/post');
      break;
    case 'saveButton':
      firebase.makingPost();
      break;
    case 'signInUser':
      firebase.signInWithEmailAndPassword();
      break;
    case 'signIn':
      onNavigate('/signIn');
      break;
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
