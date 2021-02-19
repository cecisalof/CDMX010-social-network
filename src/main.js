// eslint-disable-next-line import/no-cycle
import { onNavigate, routes, rootDiv } from './routes.js';

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

window.onNavigate = onNavigate;
