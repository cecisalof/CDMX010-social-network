// Test de interacción de el flujo de autentificación
// import { TestScheduler } from '@jest/core';
import { signIn } from '../src/auth/signIn.js';
import { deleteModal } from '../src/PostController/deleteModal.js';
import { deleteConfirmation } from '../src/PostController/modals.js';

describe('DOM render', () => {
  it('should show "sign In" view in the DOM', () => {
    const container = document.createElement('div');
    signIn(container);
    expect(container.innerHTML).toMatchSnapshot();
  });
});

describe('Testing delete confirmation modal template', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="modalContainer"></div>';
  });
  it('should render the modal in the DOM', () => {
    const modalContainer = document.getElementById('modalContainer');
    deleteModal(modalContainer);
    expect(modalContainer.innerHTML).toMatchSnapshot();
  });

  it('should inicialize delePost() function from firebase.js file', () => {
    const postId = '123';
    const deletePost = jest.fn().mockImplementation(() => Promise.resolve());
    const firebase = { deletePost };
    deleteConfirmation(postId, firebase);
    const confirmButton = document.getElementById('confirm');
    confirmButton.click();
    expect(deletePost).toHaveBeenCalledWith(postId); // verifica que la función mock fue invocda
  });
});
