import { nav } from './components/nav.js';

export const login = (container) => {
  const html = `
 
  <div>
    <img id="snipple" src="resources/garabato.png" alt="logo" class= "link" data-action = "home">
    <button> Iniciar Sesión</button>
    <button>Registarse</button>
  </div>
  
  <div>
    <p>Al iniciar sesión aceptas nuestros términos de servicio y estás al tanto de nuestro aviso de privacidad.</p>
  </div>
  `;
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
};

export const singIn = (container) => {
  const html = `
  
  <div>
    <img id="snipple" src="resources/garabato.png" alt="logo" class= "link" data-action = "home">
    <hi1>Iniciar sesión</h1>
    <form>
        <input type= "text" placeholder="Tu correo electrónico"></input>
        <input type= "password" placeholder="Tu contraseña"></input>
        <button>Acceder</button>
    </form>
  </div>
  
  <div>
  <button>Iniciar sesión con Google</button>
  </div>
  `;
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
};

export const singUp = (container) => {
  const html = `
    
    <div>
    <img id="snipple" src="resources/garabato.png" alt="logo" class= "link" data-action = "home">
      <hi1>Crear una cuenta</h1>
      <form>
          <input type= "text" placeholder="Tu nombre completo"></input>
          <input type= "text" placeholder="Tu correo electrónico"></input>
          <input type= "password" placeholder="Tu contraseña"></input>
          <button>Crear cuenta</button>
      </form>
    </div>
    
    <div>
    <button>Registrarse con Google</button>
    </div>
    `;
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
};
