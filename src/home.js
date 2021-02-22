// eslint-disable-next-line import/no-cycle
import { db } from "./firebase.js";
import {createpost} from "./app.js"

const homePage = /*html*/ `
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
`;

const createCard = () => {
  /*html*/ `
<div>
    <div id="cardContainer">
        <img id="authorAvatar" class="icons" src="resources/user.png" alt="authorAvatar">
        <h2>${message.data().cardTitle}</h2>
        <h3>${message.data().subtitleCard}</h3>
        <img id="readingTime" class="icons" src="resources/clock.png" alt="readingTime">
    </div>
`;
};

const createPost = `
<div>
    <input type="text" placeholder="Título de la publicación" id="title"></input>
    <input type="text" placeholder="Subtítulo" id="subtitle"></input>
    <input type="text" placeholder="Cuerpo de la publicación" id="body"></input>
    <button id="saveButton">Publicar</button>
</div>
<div id="commentary">
</div>
`;

export const home = homePage + createCard + createPost;
