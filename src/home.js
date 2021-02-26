import { savePost, db, getData } from './firebase.js';

export const home2 = (param) => `<h1> ${param}I am the Home2 In Page </h1> `;

const createPost = `
<div>
    <input type="text" placeholder="Título de la publicación" id="title"></input>
    <input type="text" placeholder="Subtítulo" id="subtitle"></input>
    <textarea type="text" placeholder="Cuerpo de la publicación" id="body"></textarea>
    <button id="saveButton">Publicar</button>
</div>

<div id="commentary">
</div>
`;

export const renderPost = (param) => `
<div>

<h2 id="rendertitle">${param.title}</h2><br>
<h3 id"renderSubtitle">${param.subtitle}</h3><br>
<p id="renderBody">${param.body}</p>
</div>
<div>
<button id="like">LIKE</button>
<button id="edit">Edit</button>
<button id="delete">DELETE</button>
</div>
`;

export const home = (container) => {
  const html = `
    <div id="header">
        <img id="snipple" src="resources/garabato.png" alt="logo">
        <img id="userAvatar" class="icons" src="resources/user.png" alt="genericAvatar">
        <img id="searchIcon" class="icons" src="resources/search.png" alt "searchIcon">
    </div>

    <h1>¡Hola Elena!</h1>

    ${createPost}
    
    <div id="container2"></div>
  `;

  container.innerHTML = html;

  const postbutton = document.getElementById('saveButton');
  const titleCard = document.getElementById('title');
  const subtitleCard = document.getElementById('subtitle');
  const bodyCard = document.getElementById('body');
  const space = document.getElementById('commentary');

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
      .then((result) => { space.innerHTML += renderPost(post), like(), console.log(post.title, post.subtitle, post.body); })
      .catch((error) => console.log(error));

    titleCard.value = '';
    subtitleCard.value = '';
    bodyCard.value = '';
  });
};

/*
const getData = () => { db.collection('newPost')// .orderBy('fecha')
  .onSnapshot((query) => {
    query.forEach((message) => {
      let dataBase = message.data();
      console.log('Holo', dataBase);
    });
  });
};
getData(); */

/* PRUEBA E FUNCIÓN DE IMPRESIÓN DE DATA
 const renderPost2 = () => db.collection('newPost').orderBy('fecha').onSnapshot((changes) => {
      changes.forEach((element) => {
        const info = element.data();
        const html2 = ' ';
        const template = document.getElementById('container2');
        info.forEach(data => html2 += renderPost(data));
        template.innerHTML = html2;
      });
    }); */

const like = () => {
  const likebutton = document.getElementById('like');
  likebutton.addEventListener('click', () => {
    console.log('Yo voy a dar Like');
});
};

