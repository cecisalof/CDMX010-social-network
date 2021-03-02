// Este es el punto de entrada de tu aplicacion
// eslint-disable-next-line import/no-cycle
import { home } from './home.js';
import { logIn } from './login.js';
import { post } from './post.js';

const links = document.querySelectorAll('.link');

export const rootDiv = document.getElementById('root');

export const routes = {
  '/': home,
  '/login': logIn,
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

// function routingLinks(e) {
//   if (e === 'sniple') {
//     console.log("Leyó el garabato!");
//     onNavigate('/');
//   }
//   if (e === 'userAvatar') {
//     console.log("Leyó el avatar!");
//     onNavigate('/login');
//   }
//   if (e === 'cardContainer') {
//     console.log("Leyó el la tarjeta de post!");
//     onNavigate('/post');
//   } else {
//     console.error('The link failed!');
//   }
// }

// links.forEach((e) => {
//   e.addEventListener('click', () => {
//     console.log("FUNCIONA EL FOR EACH EN links");
//     console.log(e.id);
//    // routingLinks(e.id);
//   });
// });
