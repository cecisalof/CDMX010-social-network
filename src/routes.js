// Este es el punto de entrada de tu aplicacion
// eslint-disable-next-line import/no-cycle
import { home } from './home.js';
import { login } from './login.js';
import { post } from './post.js';

export const rootDiv = document.getElementById('root');

export const routes = {
  '/': home,
  '/login': login,
  '/post': post,
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
};

// Esta es la aplicación que itera con los los targets donde se ejecuta la acción

const botonLinks = () => {
  const links = document.querySelectorAll('#root');
  links.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const link = e.target.dataset.action;
      console.log(link);
      // eslint-disable-next-line no-use-before-define
      routingLinks(link);
    });
  });
};

// Esta es la aplicación que genera el routing

const routingLinks = (e) => {
  // eslint-disable-next-line default-case
  switch (e) {
    case 'home':
      onNavigate('/');
      botonLinks();
      break;
    // eslint-disable-next-line no-fallthrough
    case 'login':
      onNavigate('/login');
      botonLinks();
      break;
    // eslint-disable-next-line no-fallthrough
    case 'post':
      onNavigate('/post');
      botonLinks();
      break;
    // eslint-disable-next-line no-fallthrough
    case '':
      console.log('erro404');
  }
};

botonLinks();
