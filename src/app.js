// eslint-disable-next-line import/no-cycle
import { routes, rootDiv } from './routes.js';
import { savePost } from './firebase.js';

// eslint-disable-next-line no-unused-expressions
routes;
// eslint-disable-next-line no-unused-expressions
rootDiv;

const postButton = document.getElementById('saveButton');
const titleCard = document.getElementById('title');
const subtitleCard = document.getElementById('subtitle');
const bodyCard = document.getElementById('body');

postButton.addEventListener('click', (e) => {
  e.preventDefault();
  const post = {
    title: titleCard.value,
    subtitle: subtitleCard.value,
    body: bodyCard.value,
    fecha: Date.now(),
  };

  if (!titleCard.value.trim() || !subtitleCard.value.trim() || !bodyCard.value.trim()) {
    alert('Input vacío!');
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

/*
export const makingPost = () => {
  postButton.addEventListener('click', (e) => {
    e.preventDefault();
    const post = {
      title: titleCard.value,
      subtitle: subtitleCard.value,
      body: bodyCard.value,
      fecha: Date.now(),
    };

    if (!titleCard.value.trim() || !subtitleCard.value.trim() || !bodyCard.value.trim()) {
      alert('Input vacío!');
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
};

makingPost();
*/
