// eslint-disable-next-line import/no-cycle
import { getData } from '../firebase.js';
import { nav } from './components/nav.js';
// eslint-disable-next-line import/no-cycle

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

export const home = (container) => {
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
          <button class="button" data-action="saveButton">Publicar</button>
      </div>
    </div>
    <div id="printData">
    </div>

      <div id="container2" ></div>
    </div>
  </div>
  `;
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
  getData();
};
