// eslint-disable-next-line import/no-cycle

import { nav } from './components/nav.js';
/*
export const renderPost = (param) => `
<div>
  <div id="cardContainer" class= "link">
    <h2 id="cardTitle" class="link" data-action = "post">${param.Title}</h2>
    <!--<img id="authorAvatar" class="icons" src="resources/user.png" alt="authorAvatar">-->
    <h3 id="cardSubtitle">${param.Subtitle}</h3>
    <p id="renderBody">${param.Body}</p>
    <!--<img id="readingTime" class="icons" src="resources/clock.png" alt="readingTime">-->
    </div>
</div>
`;
*/

export const renderPost = (param, id) => `
<div id="cardContainer">
    <div class="textPost">
      <h2 id="cardTitle" data-action = "post"  >${param.Title}</h2>
      <h3 id="cardSubtitle">${param.Subtitle}</h3>
      <p id="renderBody">${param.Body}</p>
      
    </div>
    <div id="iconHeart">
      <img id= "like" class="icon" src="resources/Heart.png" alt="image" data-action="like" data-id ="${id}">
      <p id="likesNumber">0</p>
    </div>
    <div class="icons">
      <img class="icon" src="resources/Trash.png" alt="imagen" data-action="delete" data-id ="${id}">
      <img class="icon" src="resources/Edit.png" alt="image" data-action="edit" data-id ="${id}">
    </div>
  </div>
  `;
export const home = (container, firebase, userName) => {
  const html = `
  <div id="app">
    ${nav}
      <h1>¡Hola ${userName}!</h1>
      
    <div>
      <div id="newPost">
        <h6>Comparte tus hallazgos:</h6>
          <input type="text" placeholder="Título de la publicación" id="title"></input>
          <textarea placeholder="Subtítulo" id="subtitle"></textarea>
          <textarea placeholder="Cuerpo de la publicación" id="body"></textarea>
          <button class="button" data-action="saveButton">Publicar</button>
      </div>
    </div>
    <div id="printData"></div>
      <div id="container2"></div>
  `;
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
  firebase.getData();
};
