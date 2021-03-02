import { onNavigate, routes, rootDiv } from './routes.js';
import { createCard } from './home.js';
import { getPost, savePost, db } from './firebase.js';

const titleCard = document.getElementById('title');
const subtitleCard = document.getElementById('subtitle');
const bodyCard = document.getElementById('body');
const postButton = document.getElementById('saveButton');
const postContainer = document.getElementById('printData');

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

window.onNavigate = onNavigate;

const like = () => {
  const likebutton = document.getElementById('like');
  likebutton.addEventListener('click', () => {
    console.log('Yo voy a dar Like');
  });
};

postButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevenimos que el navegador no se actualice y que no haga nada por defecto
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
      like();
    })
    .catch((error) => console.log(error));
});

db.collection('newPost')// .orderBy('fecha')
  .onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const dataBase = doc.data();
      postContainer.innerHTML += renderPost(dataBase);
      console.log(dataBase);

      // renderPost(dataBase)
      // return dataBase;
      // renderPost(dataBase);
    });
  });
