// eslint-disable-next-line import/no-cycle

import { nav } from '../components/nav.js';

export const renderPost = (param, id) => `
  <div id="cardContainer">
      <div class="textPost">
          <h2 id="cardTitle" data-action = "post"  >${param.Title}</h2>
          <h3 id="cardSubtitle">${param.Subtitle}</h3>
          <p id="renderBody">${param.Body}</p>
      </div>
      <div id="iconHeart">
          <!--<button id="likeButton">-->
          <img id= "like" class="icon" src="resources/Heart.png" alt="image" data-action="like" data-id ="${id}">
          <p id="likeCounter">${param.Like.length}</p>
          <!--</button>-->
      </div>
      <div class="icons">
          <img class="icon" id="trigger"src="resources/Trash.png" alt="delete-button" data-action="delete" data-id ="${id}">
          <img class="icon" src="resources/Edit.png" alt="image" data-action="edit" data-id ="${id}">
      </div>
  </div>
  <div id="modalContainer">
      <div id="modalContent"></div>
  </div>
  `;

export const home = (container, firebase) => {
  const html = `
  <div id="app">
    ${nav}
      <h1>¡Hola Elena!</h1>
      
    <div>
      <div id="newPost">
        <h6>Comparte tus hallazgos:</h6>
          <input type="text" placeholder="Título de la publicación" id="title"></input>
          <textarea placeholder="Subtítulo" id="subtitle"></textarea>
          <textarea placeholder="Cuerpo de la publicación" id="body"></textarea>
          <button  id="btn" class="button" data-action="saveButton">Publicar</button>
      </div>
    </div>
    <div id="printData"></div>
      <div id="container2"></div>
   `;
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
  firebase.getData();
};