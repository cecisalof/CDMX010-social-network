// Test de interacción de el flujo de autentificación

// import { login } from '../src/lib/login.js';
import { TestScheduler } from '@jest/core';
import { signIn } from '../src/auth/signIn.js';
import { deleteConfirmation } from '../src/PostController/deleteConfirmation.js';
import { deleteModal } from '../src/PostController/modals.js';

// import { signUp } from '../src/lib/signUp.js';
// import { eventsController } from '../src/routes.js';

describe('DOM render', () => {
  // const controller = eventsController();
  it('should show "sign In" view in the DOM', () => {
    const container = document.createElement('div');
    signIn(container);
    //const signInButton = document.querySelector('#signIn');
    //signInButton.click();
    expect(container.innerHTML).toMatchSnapshot();
  });
});

describe('Testing delete confirmation modal template', () => {
  beforeEach(() => {
    // const container = document.createElement('div');
    document.body.innerHTML = '<div id="modalContainer"></div>';
  });
  it('should render the modal in the DOM', () => {
    // bno importa que el id sea falso, el id en un string, puedo colocarl lo que sea y pasarselo a deleteConfirmation.
    const modalContainer = document.getElementById('modalContainer');
    deleteConfirmation(modalContainer);
    expect(modalContainer.innerHTML).toMatchSnapshot();
  });

  it('should inicialize delePost() function from firebase.js file', () => {
    const postId = '123';
    const deletePost = jest.fn().mockImplementation(() => Promise.resolve());
    const firebase = { deletePost };
    deleteModal(postId, firebase);
    const confirmButton = document.getElementById('confirm');
    confirmButton.click();
    expect(deletePost).toHaveBeenCalledWith(postId);// CONSTANTE FALSA QUE CREARÉ ARRIBA.
    // verifica que la función mock fue invocda
  });
});
