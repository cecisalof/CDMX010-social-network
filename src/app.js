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

// DELETE POST FUNCTION
export const deletePostFunction = (id) => {
  firebase.deletePost(id);
};

const currentPost = (id) => firebase.db.collection('newPost').doc(id).get();
export let editingPost = false;

export const postEditado = (id) => {

  const updatePost = firebase.db.collection('newPost').doc(id);
  const title = document.getElementById('title').value;
  const subtitle = document.getElementById('subtitle').value;
  const body = document.getElementById('body').value;
  console.log(updatePost);
  // editingPost = true;
  return updatePost.update({
    Title: title,
    Subtitle: subtitle,
    Body: body,
    Fecha: Date.now(),
  });
};

export function editPost(id) {
  currentPost(id)
    .then((result) => {
      editingPost = true;
      // eslint-disable-next-line no-const-assign
      const infoData = result.data();
      document.getElementById('title').value = infoData.Title;
      document.getElementById('subtitle').value = infoData.Subtitle;
      document.getElementById('body').value = infoData.Body;
      const boton = document.getElementById('btn');
      boton.innerHTML = 'Editar';
      boton.addEventListener('click', () => {
        postEditado(id)
          .then(() => {
            console.log('Updated!');
            editingPost = false;
            boton.innerHTML = 'Publicar';
            document.getElementById('title').value = '';
            document.getElementById('subtitle').value = '';
            document.getElementById('body').value = '';
          });
      });
    })
    .catch((error) => console.log(error));
}

/*
  document.getElementById('title').value = title;
  document.getElementById('subtitle').value = subtitle;
  document.getElementById('body').value = body;
  const buttonE = document.getElementById('saveButton');
  buttonE.innerText = 'Editar';
  */

/*
// LIKES FUNCTION
const likesFunction = (id) => {
  let likes = 0;
  const heartButton = document.querySelector('like');
  const likeCounter = document.querySelector('likesNumber');
  const click = id;
  likeCounter.innerHTML = ++likes;
};
*/
