export const signUp = (container) => {
  const html = `
        
    <div id="signUpDiv">
      <div>
        <img id="signUpSnipple" src="resources/garabato.png" alt="logo" class= "link" data-action = "home">
          <h1 id="signUpTitle">Crear una cuenta</h1>
          <form>
              <input type= "text" placeholder="Tu nombre completo"></input>
              <input type= "text" placeholder="Tu correo electrónico"></input>
              <input type= "password" placeholder="Tu contraseña"></input>
              <button class="button" data-action="home">Crear cuenta</button>
          </form>
      </div>
      
      <div class="signUpButton">
        <button class="button">Registrarse con Google</button>
      </div>
    </div>
        `;
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
};
