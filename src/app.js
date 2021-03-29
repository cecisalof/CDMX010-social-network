/* eslint-disable no-console */
// eslint-disable-next-line import/no-cycle
import { routes, rootDiv, loadFirebase } from './routes.js';
import * as firebase from './lib/firebase.js'; // importa a firebase y lo pasa a los demás archivos

loadFirebase(firebase);
const homeView = routes[window.location.pathname];
homeView(rootDiv, firebase);

// window.onpopstate = () => {
//   homeView = routes[window.location.pathname];
//   homeView(rootDiv, firebase);
// };
