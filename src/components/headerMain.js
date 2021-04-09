import { handleSignOut } from '../services/index.js';
import { onNavigate } from '../utils/history.js';

export const headerMain = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = ` 
          <header id="header">
              <img id="logo-main" src="../../img/Logo/logo-temporario-red.png" alt="Logo do Site">
              <input id="exit" type="image" src="../../img/Logout/logout-red.png" alt="Logout" />
          </header> 

         
  
          <main>
              <section id="user-container">
                <img id="photoUser" class="user-item">
                <h2 class="user-item" id="hello-user"> </h2>
              </section>

            <section id="option-container">
              <h3 ><a  class="option-item" id="post">Publicar</a></h3>
              <h3 ><a  class="option-item" id="publicacoes">Publicações</a></h3>
            </section>
  
              <section id=recent-container>
                  <h4>Publicações</h4>
              </section>
              
              <section>
                  <div id=text></div>
              </section>  
          </main>
        
      `;

  const userName = rootElement.querySelector('#hello-user');
  const photoPerfil = rootElement.querySelector('#photoUser');
  const publicar = rootElement.querySelector('#post');
  const publicacoes = rootElement.querySelector('#publicacoes');
  const returnPage = rootElement.querySelector('#logo-main');

  publicar.addEventListener('click', () => {
    onNavigate('/publicar');
  });

  publicacoes.addEventListener('click', () => {
    onNavigate('/publicacoes');
  });

  returnPage.addEventListener('click', () => {
    onNavigate('/publicar');
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      userName.innerHTML = `Olá, ${user.displayName}!`;
      photoPerfil.src = user.photoURL;
    } else {
      onNavigate('/');
    }
  });

  const btnExit = rootElement.querySelector('#exit');
  btnExit.addEventListener('click', (event) => {
    event.preventDefault();
    handleSignOut();
    onNavigate('/');
  });

  return rootElement;
};
