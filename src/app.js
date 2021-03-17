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
const deletePostFunction = (id) => {
  firebase.deletePost(id);
};

const currentPost = (id) => firebase.db.collection('newPost').doc(id).get();
const postForm = document.getElementById('newPost');
const editStatus = false;

const function2 = (id) => {
  const updatePost = firebase.db.collection('newPost').doc(id);
  

  const title = document.getElementById('title').value;
  const subtitle = document.getElementById('subtitle').value;
  const body = document.getElementById('body').value;
  
  return updatePost.update({
    Title: title,
    Subtitle: subtitle,
    Body: body,
    Fecha: Date.now(),
  });
};

export function editPost(id) {
  const postContainer = document.getElementById('printData');
  currentPost(id)
    .then((result) => {
      const infoData = result.data();
      document.getElementById('title').value = infoData.Title;
      document.getElementById('subtitle').value = infoData.Subtitle;
      document.getElementById('body').value = infoData.Body;
      const boton = document.getElementById('btn');
      boton.innerHTML = 'Editar';

      boton.addEventListener('click', () => {
        postContainer.innerHTML = '';
        function2(id)
          .then(() => {
            console.log('Updated!');
            boton.innerHTML = 'Publicar';
            document.getElementById('nombre').value = '';
            document.getElementById('subtitle').value = '';
            document.getElementById('body').value = '';
          }).catch((error) => {});
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
// CONTROLADOR::

const postController = (click, id) => {
  console.log(click, id);
  if (click === 'delete') {
    deletePostFunction(id);
  } if (click === 'like') {
    // likesFunction(id);
  }
};

const addButtonEventsPost = () => {
  const parentContainer = document.querySelectorAll('#root');
  parentContainer.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = e.target.dataset.id;
      const clickEvent = e.target.dataset.action;
      console.log('HOLO', clickEvent, id);
      postController(clickEvent, id);
    });
  });
};

addButtonEventsPost();
