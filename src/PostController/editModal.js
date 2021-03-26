export const editModal = (container, id) => {
  const postTemplate = ` 
     <div class="modal">
      <div class="modal-content">
          <span class="close-button">&times;</span>
          <div id="newPost">
          <h6>Comparte tus hallazgos:</h6>
            <input type="text" placeholder="Título de la publicación" id="titleEdit"></input>
            <textarea placeholder="Subtítulo" id="subtitleEdit"></textarea>
            <textarea placeholder="Cuerpo de la publicación" id="bodyEdit"></textarea>
            <button  id="edit" class="button" data-action="editButton" data-id ="${id}">Editar</button>
        </div>
      </div>
  </div> 
    `;

  // eslint-disable-next-line no-param-reassign
  // container.innerHTML = postTemplate;
  // firebase.editPost();
  const postData = () => {
    firebase.firestore().collection('newPost').doc(id).get()
      .then((doc) => {
        const dataToBeUpdated = doc.data();
        // console.log('data to be Updated', dataToBeUpdated);
        document.getElementById('titleEdit').value = dataToBeUpdated.Title;
        document.getElementById('subtitleEdit').value = dataToBeUpdated.Subtitle;
        document.getElementById('bodyEdit').value = dataToBeUpdated.Body;
      })
      .catch((error) => {
        console.log('An error had ocured inside EDIT CONFIRMATION!');
      });
  };
  postData(id);
  container.innerHTML = postTemplate;
};
