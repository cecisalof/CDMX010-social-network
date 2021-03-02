// eslint-disable-next-line import/no-cycle
// Form del post
export const createPost = `
<div>
    <form id="postForm">
        <div id="newPost">
            <h6>Comparte tus hallazgos:</h6>
            <input type="text" placeholder="Título de la publicación" id="title"></input>
            <textarea placeholder="Subtítulo" id="subtitle"></textarea>
            <textarea placeholder="Cuerpo de la publicación" id="body"></textarea>
            <button id="saveButton">Publicar</button>
        </div>
    </form>
</div>
`;
// Renderiza la tarjeta de la publicación en el muro.
export const createCard = (post) => {
  // eslint-disable-next-line no-unused-expressions
  `
    <div>
        <div id="cardContainer">
            <h2 id="cardTitle">${post.titulo}</h2> <img id="authorAvatar" class="icons" src="resources/user.png" alt="authorAvatar">
            <h3 id="cardSubtitle">${post.descripcion}</h3>
            <p>${post.texto}</p>
            <img id="readingTime" class="icons" src="resources/clock.png" alt="readingTime">
        </div>
  `;
};

// Renderiza la vista del home
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
};
