// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../routes.js';

export const login = (container) => {
  const html = `
 
  <div class="logIng">
    <div>
      <img id="bigSnipple" src="resources/garabato.png" alt="logoDeLoging" data-action = "home">
    </div>
    <div class="bottonSection">
      <button id='signIn' data-action = "signIn">Iniciar Sesión</button><br>
      <button class="signUpBotton"  data-action ="signUp">Registarse</button>
    </div>
    
    <div class="terms">
      <p>Al iniciar sesión aceptas nuestros términos de servicio y estás al tanto de nuestro aviso de privacidad.</p>
    </div>
  </div>
  `;
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;

  const signInBtn = document.getElementById('signIn');
  signInBtn.addEventListener('click', () => {
    onNavigate('/signIn');
  });
};
