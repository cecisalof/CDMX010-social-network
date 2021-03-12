export const signIn = (container) => {
  const html = `
      <div id="signInContainer">
        <img id="bigSnipple" src="resources/garabato.png" alt="logo" class= "link" data-action = "home">
        <h1 id="signInTitle">Iniciar sesión</h1>
        <form>
          <input type= "text" placeholder="Tu correo electrónico"></input>
          <input type= "password" placeholder="Tu contraseña"></input>
          <button id="signInButton"class="button" data-action="home">Acceder</button>
        </form>
      </div>

      <div class="signInButton">
      <button class="button" data-action="signInWithGoogle">Iniciar sesión con Google</button>
      </div>
    `;
    // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
};
