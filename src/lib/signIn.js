export const signIn = (container) => {
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
