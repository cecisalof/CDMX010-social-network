export const login = (container) => {
  const html = `
 
  <div>
    <img id="snipple" src="resources/garabato.png" alt="logo" class= "link" data-action = "home">
    <button data-action = "signIn">Iniciar Sesión</button>
    <button  data-action = "signUp">Registarse</button>
  </div>
  
  <div>
    <p>Al iniciar sesión aceptas nuestros términos de servicio y estás al tanto de nuestro aviso de privacidad.</p>
  </div>
  `;
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
};
