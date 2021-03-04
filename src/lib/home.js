// eslint-disable-next-line import/no-cycle
import { getData } from '../firebase.js';

export const renderPost = (param) => `
<div>
  <div id="cardContainer" class= "link">
    <h2 id="cardTitle" class="link" data-action = "post">${param.Title}</h2><!--<img id="authorAvatar" class="icons" src="resources/user.png" alt="authorAvatar">-->
    <h3 id="cardSubtitle">${param.Subtitle}</h3>
    <p id="renderBody">${param.Body}</p>
    <!--<img id="readingTime" class="icons" src="resources/clock.png" alt="readingTime">-->
    </div>
</div>
`;

export const home = (container) => {
  const html = `
  <div id="app">
    <div id="header">
          <img id="snipple" src="resources/garabato.png" alt="logo" class= "link" data-action ="home">
          <img id="userAvatar" class="link" src="resources/user.png" alt="genericAvatar"  data-action ="login">
          <!-- <img id="searchIcon" class="link" src="resources/search.png" alt "searchIcon"> -->
      </div>
      <h1>¡Hola Elena!</h1>
      
    <div>
      <div id="newPost">
        <h6>Comparte tus hallazgos:</h6>
          <input type="text" placeholder="Título de la publicación" id="title"></input>
          <textarea placeholder="Subtítulo" id="subtitle"></textarea>
          <textarea placeholder="Cuerpo de la publicación" id="body"></textarea>
          <button id="saveButton">Publicar</button>
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
