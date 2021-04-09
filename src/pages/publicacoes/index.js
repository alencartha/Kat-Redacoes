import { getPosts} from '../../services/index.js';
import { addPost } from '../../components/post.js';
import {headerMain} from '../../components/headerMain.js'


export const publicacoes = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = ` 
        <header id="header-section">
        </header> 

        <main>
            
            <section>
                <div id=text></div>
            </section>  
        </main>
      
    `;

    const headerMainPost = rootElement.querySelector('#header-section');
    headerMainPost.appendChild(headerMain())



  const postSection = rootElement.querySelector('#text');

  getPosts().then((snap) => {
    snap.forEach((post) => {
      postSection.appendChild(addPost(post));
    });
  });

  return rootElement;
};
