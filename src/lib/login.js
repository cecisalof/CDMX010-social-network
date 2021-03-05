import { nav } from './nav.js';

export const login = (container) => {
  const html = `
  ${nav}
  <div>
    <h1> I am the Log In Page </h1>
  </div>
  `;
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
};
