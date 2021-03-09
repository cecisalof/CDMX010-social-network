export const signUp = (container) => {
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
