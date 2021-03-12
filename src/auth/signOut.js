export const signOut = (container) => {
  const html = `
        <div>
            <h3>Tu cuenta</h3>
            <p>Tu correo electrónico:</p>
            <p>Tus publicaciones</p>
            </div>
        <div id="signOutContainer">
           <button data-action="signOut">Cerrar Sesión</button>
        </div>
      `;
    // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
};
