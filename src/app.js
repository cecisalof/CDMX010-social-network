// eslint-disable-next-line import/no-cycle
import { onNavigate, routes, rootDiv } from './routes.js';
import { home, renderPost } from './home.js';
import { getData } from './firebase.js';

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

window.onNavigate = onNavigate;
/*
window.addEventListener("DOMContentLoaded", (post) => {
home()
});
*/
// ESTA FU8NCIÓN SOLAMENTE CARGA LOS VALORES DE MI TEMPLATE QUE ESTA EN HOME

// export const baseDatos = db.collection("newPost2").onSnapshot(query => {
//  query.forEach(message => {
//    let dataBase = message.data();
//    console.log(dataBase);
//  });
// });

/*
const basedatos = db.collection('newPost2').onSnapshot(query => {
  query.forEach(message => html += createCard(message))
  });
*/
