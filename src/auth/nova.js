import { onNavigate } from '../routes.js';

export const novaApp = (container) => {
  const html = `
        <div id="novaAppPage">
          <img id="inicialLogo" src="resources/novaAppImage.png" alt="Inicial logo" data-action="login">
        </div>
        `;
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;

  const animate = () => {
    setTimeout(() => {
      onNavigate('/login');
    }, 3000);
  };
  animate();
};
