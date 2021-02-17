// eslint-disable-next-line import/no-cycle
import { onNavigate, routes, rootDiv } from './routes.js';

// const space = document.querySelector('#app');
/*
const article = () => {
  const link = document.createElement('A');
  link.textContent = 'leer más';
  link.appendChild(link);
};

export const link = article();

const links = document.createElement('A');
links.textContent = 'leer mas';
*/
/*
const botones = document.querySelector('.link');
botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    console.log(boton.id);
  }
);
*/

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

window.onNavigate = onNavigate;
