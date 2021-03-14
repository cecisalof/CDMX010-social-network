export const signUp = (container) => {
  const html = `
  <div id="signUpDiv">
      <div>
      <img id="signUpSnipple" src="resources/garabato.png" alt="logo" class= "link" data-action = "home">
        <h1 id="signUpTitle">Crear una cuenta</h1>
        <form>
            <input id="userName" type= "text" placeholder="Tu nombre completo"></input>
            <input id="userEmail" type= "email" placeholder="Tu correo electrónico"></input>
            <input id="userPassword" type= "password" placeholder="Tu contraseña"></input>
            <button class="button" data-action="signUpButton">Crear cuenta</button>
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
