export const login = (containner) => {
  const html = `
  <div id="header">
    <img id="snipple" src="resources/garabato.png" alt="logo" class= "link">
    <img id="userAvatar" class="link" src="resources/user.png" alt="genericAvatar">
    <!-- <img id="searchIcon" class="link" src="resources/search.png" alt "searchIcon"> -->
  </div>
  <div>
    <h1> I am the Log In Page </h1>
    <form>
      <input type="text" placeholder="Nombre completo"></input>
      <input type="text" placeholder="Correo electrónico"></input>
      <input type="text" placeholder="Contraseña"></input>
      <button>Registrarme</button>
    </form>
  </div>
  `;
  // eslint-disable-next-line no-param-reassign
  containner.innerHTML = html;
};
