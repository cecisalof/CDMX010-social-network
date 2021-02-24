import { onNavigate, routes, rootDiv } from './views/routes.js';
import { savePost } from './firebase.js';

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

window.onNavigate = onNavigate;

savePost();
