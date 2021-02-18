// Este es el punto de entrada de tu aplicacion
import post from './post.js';
// eslint-disable-next-line import/no-cycle
import { home } from './home.js';
import logIn from './login.js';
import post from './post.js';

export const rootDiv = document.getElementById('root');

export const routes = {
  '/': home,
  '/logIn': logIn,
  '/post': post,
};

rootDiv.innerHTML = routes[window.location.pathname];

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
};
