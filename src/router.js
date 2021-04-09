// Este é seu ponto de entrada da sua aplicação
import { Login } from './pages/login/index.js';
import {createAccount} from './pages/createAccount/index.js';
import { publicar } from './pages/publicar/index.js';
import { publicacoes } from './pages/publicacoes/index.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Login,
    '/criar-conta': createAccount,
    '/publicar': publicar,
    '/publicacoes':publicacoes
  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
    onNavigate('/');;
  routeRender();
});
