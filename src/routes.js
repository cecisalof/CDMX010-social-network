/* eslint-disable no-unused-vars */
// Este es el punto de entrada de tu aplicacion
// eslint-disable-next-line import/no-cycle
import { home } from './home.js';
import { login } from './login.js';
import { post } from './post.js';
import { novaApp } from './auth/nova.js';
// eslint-disable-next-line import/no-cycle
import { makingPost } from './app.js';
import { signIn } from './auth/signIn.js';
import { signUp } from './auth/signUp.js';
import { singUpWithEmailAndPassword } from './auth.js';

export const rootDiv = document.getElementById('root');

export const routes = {
  '/': novaApp,
  '/home': home,
  '/login': login,
  '/post': post,
  '/signIn': signIn,
  '/signUp': signUp,
};

const homeView = routes[window.location.pathname];
homeView(rootDiv);

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  const view = routes[pathname];
  view(rootDiv);
  // homeView(rootDiv);
};

// Esta es la aplicación que itera con los los targets donde se ejecuta la acción
const addButtonEvents = () => {
  const parentContainer = document.querySelectorAll('#root');
  parentContainer.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const click = e.target.dataset.action;
      console.log(click);
      // eslint-disable-next-line no-use-before-define
      eventsController(click);
    });
  });
};

// Esta es la aplicación que genera el routing
const eventsController = (e) => {
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
    case 'signIn':
      onNavigate('/signIn');
      break;
    // eslint-disable-next-line no-fallthrough
    case 'signUp':
      onNavigate('/signUp');
      break;
    case 'signUpButton':
      singUpWithEmailAndPassword();
  }
};

addButtonEvents();
