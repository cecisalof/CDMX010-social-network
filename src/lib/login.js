import { nav } from './components/nav.js';

export const login = (container) => {
  const html = `
  ${nav}
  <div>
    <h1> B I E N V E N I D O </h1>
  </div>
  `;
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
};
