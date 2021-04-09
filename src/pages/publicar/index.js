import { createPost, handleSignOut } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';
import { headerMain } from '../../components/headerMain.js';
import showModal from '../../components/showModal.js';

export const publicar = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <header id="header-main-publicar">
     
    </header> 
    <main>
      <section class="page-section">
        <label class="title" for="title">Publicar</label>
        <textarea id="post-user" cols="50" rows="20" placeholder="Escreva aqui..."></textarea>
      </section>
      <section id="container-button">
        <button id="postar">Enviar</button>
      </section>  
     </section>   
  `;

  const headerMainPost = rootElement.querySelector('#header-main-publicar');
  headerMainPost.appendChild(headerMain());

  const post = rootElement.querySelector('#postar');
  const mensagem = rootElement.querySelector('#post-user');

  post.addEventListener('click', () => {
    if (mensagem.value === '') {
      const errorMessage = 'Digite a mensagem!';
      showModal(errorMessage);
    } else {
      createPost(mensagem.value);
      onNavigate('/publicacoes');
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
