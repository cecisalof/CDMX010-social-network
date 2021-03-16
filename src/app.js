/* eslint-disable no-console */
// eslint-disable-next-line import/no-cycle
import { routes, rootDiv, loadFirebase } from './routes.js';
import * as firebase from './firebase.js';

loadFirebase(firebase);
let homeView = routes[window.location.pathname];
homeView(rootDiv, firebase);

window.onpopstate = () => {
  homeView = routes[window.location.pathname];
  homeView(rootDiv, firebase);
};
