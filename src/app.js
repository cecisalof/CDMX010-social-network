// eslint-disable-next-line import/no-cycle
import { onNavigate, routes, rootDiv } from './routes.js';
import { renderPost } from './home.js';
import { savePost, db } from './firebase.js';

const postButton = document.getElementById('saveButton');
const titleCard = document.getElementById('title');
const subtitleCard = document.getElementById('subtitle');
const bodyCard = document.getElementById('body');
const postContainer = document.getElementById('printData');
const links = document.querySelectorAll('IMG');

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
/*
window.addEventListener('load', () => {
  getData()
    .then((result) => renderPost(result))
    .catch((error) => console.log(error));
});
*/
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

db.collection('newPost')// .orderBy('fecha')
  .onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const dataBase = doc.data();
      postContainer.innerHTML += renderPost(dataBase);
      console.log(dataBase);
    });
  });
// aqui abajo se encentran todas las pruebas del nuevo routing
/*
window.addEventListener('DOMContentLoaded', () => {
  links.forEach((e) => {
    e.addEventListener('click', () => {
      console.log(e.id);
    });
  });
});
*/

/*
function routingLinks(e) {
  if (e.id === "sniple") {
  }
}
*/

links.forEach((e) => {
  e.addEventListener('click', () => {
    console.log(e.id);
    routingLinks(e.id);
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
