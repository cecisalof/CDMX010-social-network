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

// LIKES FUNCTION
const likesFunction = (id) => {
  const heartButton = document.querySelector('like');
  const likeCounter = document.querySelector('likesNumber');
  console.log(likeCounter.typeof);
};

// CONTROLADOR::
const postController = (click, id) => {
  console.log(click, id);
  if (click === 'delete') {
    deletePostFunction(id);
  } if (click === 'like') {
    likesFunction(id);
  };
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
