import { home } from './home.js';
import logIn from './login.js';
import post from './post.js';

export const rootDiv = document.getElementById('root');

export const routes = {
  '/': home,
  '/logIn': logIn,
  '/post': post,
};

// document.addEventListener("DOMContentLoaded", function(event) {
//     console.log('DOM fully loaded and parsed');
// });

const homeView = routes[window.location.pathname];
homeView();

console.log(homeView);

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  const view = routes[pathname];
  view();
};
