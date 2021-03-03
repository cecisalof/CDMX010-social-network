// eslint-disable-next-line import/no-cycle
import { routes, rootDiv } from './routes.js';
import { savePost, getData } from './firebase.js';

const postButton = document.getElementById('saveButton');
const titleCard = document.getElementById('title');
const subtitleCard = document.getElementById('subtitle');
const bodyCard = document.getElementById('body');

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

postButton.addEventListener('click', (e) => {
  e.preventDefault();
  const post = {
    title: titleCard.value,
    subtitle: subtitleCard.value,
    body: bodyCard.value,
    fecha: Date.now(),
  };

  if (!titleCard.value.trim() || !subtitleCard.value.trim() || !bodyCard.value.trim()) {
    console.log('Input vacío!');
    return;
  }

  savePost(post)
    .then((docRef) => {
      console.log('Document written whith ID: ', docRef.id);
      titleCard.value = '';
      subtitleCard.value = '';
      bodyCard.value = '';
    })
    .catch((error) => console.log(error));
});

getData();
