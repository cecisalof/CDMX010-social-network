// Este es el punto de entrada de tu aplicacion
import about from './about.js';
// eslint-disable-next-line import/no-cycle
import { home } from './home.js';
import contact from './contact.js';

export const rootDiv = document.getElementById('root');

export const routes = {
  '/': home,
  '/contact': contact,
  '/about': about,
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
