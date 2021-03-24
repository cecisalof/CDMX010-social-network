export const editForm = (container, id) => {
  const postTemplate = ` 
     <div class="modal">
      <div class="modal-content">
          <span class="close-button">&times;</span>
          <div id="newPost">
          <h6>Comparte tus hallazgos:</h6>
            <input type="text" placeholder="Título de la publicación" id="titleEdit"></input>
            <textarea placeholder="Subtítulo" id="subtitleEdit"></textarea>
            <textarea placeholder="Cuerpo de la publicación" id="bodyEdit"></textarea>
            <button  id="btn" class="button" data-action="editButton" data-id ="${id}">Editar</button>
        </div>
      </div>
  </div> 
    `;

  // eslint-disable-next-line no-param-reassign
  container.innerHTML = postTemplate;
// firebase.deletePost();
};
