export const deleteModal = (container) => {
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
};
