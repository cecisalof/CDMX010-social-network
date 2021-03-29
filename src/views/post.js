import { nav } from '../components/nav.js';

export const postPage = (container) => {
  const html = `
  ${nav}
  <div>
    <h1> I am the Post Page </h1>
  </div>
`;
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
};
