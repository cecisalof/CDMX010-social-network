import { savePost, db } from './firebase.js';
export const home2 = (param) => `<h1> ${param}I am the Home2 In Page </h1> `;


const createPost = `
<div></div>
    <input type="text" placeholder="Título de la publicación" id="title"></input>
    <textarea placeholder="Subtítulo" id="subtitle"></textarea>
    <textarea placeholder="Cuerpo de la publicación" id="body"></textarea>
    <button id="saveButton">Publicar</button>
</div>

<div id="commentary">
</div>
`;

export const home = (container) => {
  const html = `
    <div id="header">
        <img id="snipple" src="resources/garabato.png" alt="logo">
        <img id="userAvatar" class="icons" src="resources/user.png" alt="genericAvatar">
        <!--<img id="searchIcon" class="icons" src="resources/search.png" alt "searchIcon">-->

    </div>

    <h1>¡Hola Elena!</h1>

    ${createPost}
    
  `;

  container.innerHTML = html;

  const postbutton = document.getElementById('saveButton');
  const titleCard = document.getElementById('title');
  const subtitleCard = document.getElementById('subtitle');
  const bodyCard = document.getElementById('body');

  postbutton.addEventListener('click', (e) => {
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
      .then((result) => { console.log('Publicación guardada con éxito!');})

      .catch((error) => console.log(error));

    titleCard.value = '';
    subtitleCard.value = '';
    bodyCard.value = '';

    // renderCards(e);
  });
};

const baseDatos = db.collection('newPost')// .orderBy('fecha')
  .onSnapshot((query) => {
    query.forEach((message) => {
      let dataBase = message.data();
      console.log(dataBase);
    });
  });
