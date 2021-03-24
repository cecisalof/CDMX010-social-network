// Test de interacción de el flujo de autentificación

// import { login } from '../src/lib/login.js';
import { signIn } from '../src/auth/signIn.js';
import { deleteConfirmation } from '../src/PostController/deleteConfirmation.js';
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
    const modalContainer = document.getElementById('modalContainer');
    deleteConfirmation(modalContainer);
    expect(modalContainer.innerHTML).toMatchSnapshot();
  });
//   it('should delete de post in firebase', () => {
//     const confirmButton = document.getElementById('confirm');
//     let docRef = firestore.doc('newPost/doc');
//     const deletePost = jest.fn().mockImplementation(() => Promise.resolve(docRef));
//     confirmButton.click();
//     docRef.delete().then(() => {
//       console.log('Document successfully deleted.');
//       expect(deletePost()).toMatchSnapshot();
//     });
//   });
});
