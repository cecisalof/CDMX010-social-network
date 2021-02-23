import { savePost } from './firebase.js';

const createPost = `
<div></div>
    <input type="text" placeholder="Título de la publicación" id="title"></input>
    <input type="text" placeholder="Subtítulo" id="subtitle"></input>
    <input type="text" placeholder="Cuerpo de la publicación" id="body"></input>
    <button id="saveButton">Publicar</button>
`;

export const home = (container) => {
  const html = `
    <div id="header">
        <img id="snipple" src="resources/garabato.png" alt="logo">
        <img id="userAvatar" class="icons" src="resources/user.png" alt="genericAvatar">
        <img id="searchIcon" class="icons" src="resources/search.png" alt "searchIcon">
    </div>
    <h1>¡Hola Elena!</h1>
    <div>
        <textarea>Crear publicación</textarea>
        <img id="plusIcon" class="icons" src="resources/plus.png" alt="plusIcon">
    </div>
    ${createPost}
    
  `;

  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;

  const postbutton = document.getElementById('saveButton');
  const titleCard = document.getElementById('title');
  const subtitleCard = document.getElementById('subtitle');
  const bodyCard = document.getElementById('body');

  postbutton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(titleCard.value);
    console.log(subtitleCard.value);
    console.log(bodyCard.value);

    if (!titleCard.trim() || !subtitleCard.trim() || !bodyCard.trim()) {
      console.log('Input vacío!');
      return;
    }

    const post = {
      title: titleCard.value,
      subtitle: subtitleCard.value,
      body: bodyCard.value,
    };

    savePost(post)
      .then((result) => { console.log('Publicación guardada con éxito!'); })
      .catch((error) => console.log(e));
  });
};
