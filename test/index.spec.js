// Test de interacción de el flujo de autentificación

// import { login } from '../src/lib/login.js';
import { signIn } from '../src/auth/signIn.js';
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
