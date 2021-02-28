// eslint-disable-next-line import/no-cycle

const homePage = `
<div id="header">
    <img id="snipple" src="resources/garabato.png" alt="logo">
    <img id="userAvatar" class="icons" src="resources/user.png" alt="genericAvatar">
    <img id="searchIcon" class="icons" src="resources/search.png" alt "searchIcon">
</div>

<h1>¡Hola Elena!</h1>

<div>
<!--<textarea>Crear publicación</textarea>
     <img id="plusIcon" class="icons" src="resources/plus.png" alt="plusIcon"> -->
</div>
`;

const createCard = `
 <div>
     <div id="cardContainer">
         <h2 id="cardTitle">Seres de luz</h2> <img id="authorAvatar" class="icons" src="resources/user.png" alt="authorAvatar">
         <h3 id="cardSubtitle">Apuntes sobre el papel de la iluminación 
         escénica en la coreografía.</h3>
        <img id="readingTime" class="icons" src="resources/clock.png" alt="readingTime">
     </div>
`;

const createPost = `
<div>
    <div id="newPost">
        <h6>Comparte tus hallazgos:</h6>
        <input type="text" placeholder="Título de la publicación" id="title"></input>
        <textarea placeholder="Subtítulo" id="subtitle"></textarea>
        <textarea placeholder="Cuerpo de la publicación" id="body"></textarea>
        <button id="saveButton">Publicar</button>
    </div>
</div>
`;

export const home = (homePage + createPost + createCard);
