// eslint-disable-next-line import/no-cycle

const homePage = `
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

<div>
    <div id="cardContainer">
        <img id="authorAvatar" class="icons" src="resources/user.png" alt="authorAvatar">
        <h2>Seres de luz</h2>
        <h3>Apuntes sobre el papel de la iluminación 
        escénica en la coreografía.</h3>
        <img id="readingTime" class="icons" src="resources/clock.png" alt="readingTime">
    </div>
`;

const createPost = `
<div>
    <input type="text" id="title"></input>
    <button id="saveButton">Publicar</button>
</div>
`;

export const home = (homePage + creadCard + createPost);
