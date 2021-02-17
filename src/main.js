// Este es el punto de entrada de tu aplicacion
import login from './login.js'
import home from './home.js'
import post from './post.js'


const routes = {
  '/': home,
  '/login': login,
  '/post': post,
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

