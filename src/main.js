// Este es el punto de entrada de tu aplicacion
import about from './about.js'
import home from './home.js'
import contact from './contact.js'


const routes = {
  '/': home,
  '/contact': contact,
  '/about': about,
};



const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

window.onNavigate = onNavigate

