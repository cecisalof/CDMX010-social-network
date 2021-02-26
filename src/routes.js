// Este es el punto de entrada de tu aplicacion
// eslint-disable-next-line import/no-cycle
import { home, home2 } from './home.js';
import { logIn } from './logIn.js';
import post from './post.js';

export const rootDiv = document.getElementById('root');

export const routes = {
  '/': home,
  '/logIn': logIn,
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
