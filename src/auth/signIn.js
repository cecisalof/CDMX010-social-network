export const signIn = (container) => {
  const html = `
        <div id="signInContainer">
          <img id="bigSnipple" src="resources/garabato.png" alt="logo" class= "link">
          <h1 id="signInTitle">Iniciar sesión</h1>
          <form>
            <input id ='userEmail' type= "text" placeholder="Tu correo electrónico"></input>
            <input id = "userPassword" type= "password" placeholder="Tu contraseña"></input>
            <button class="button" data-action="signInUser">Acceder</button>
          </form>
        </div>
        <div class="signInButton">
        <button id="googleSignInButton" class="button" data-action="signInWithGoogle">Iniciar sesión con Google</button>
        </div>
      `;
    // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
};
