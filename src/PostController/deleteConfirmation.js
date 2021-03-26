export const deleteConfirmation = (container) => {
  const modalContainer = document.getElementById('modalContainer');
  // console.log('in deleteConfirmation file', modalContainer);
  const modalTemplate = ` 
       <div class="modal">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <p>Confirma que deseas eliminar este post</p>
              <button class="button" id="confirm" "data-action="confirm">Confirmar</button>
              <button class="button" id="cancel" data-action="cancel">Cancelar</button>
        </div>
    </div> 
      `;

  modalContainer.innerHTML = modalTemplate;
  // firebase.deletePost();

  // hacer aquí la delegación de eventos al contanedor del modal
  // const buttonEventsListener = () => {
  //   // const parentContainer = document.getElementById('modalContainer');
  // const confirmButton = document.getElementById('confirm');
  // confirmButton.onclick = (e) => {
  //   e.preventDefault();
  //   // const click = e.target.dataset.action;
  //   // const confirmId = e.target.dataset.id;
  //   console.log(id);
  //   if (click === 'confirm') {
  //     // const confirmId = e.target.dataset.id;
  //     // console.log(confirmId);
  //     firebase.deletePost(id);
  //     console.log('this ID comes inside de deletePost function in the component', id);
  //   }
  // };
  //   });
  // };
};
