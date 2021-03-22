export const deleteConfirmation = (container) => {
  // const modalContainer = document.getElementById('modalContainer');
  // console.log('in deleteConfirmation file', modalContainer);
  const modalTemplate = ` 
       <div class="modal">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h1>Hello, I am a modal!</h1>
        </div>
    </div> 
      `;

  container.innerHTML = modalTemplate;
};
