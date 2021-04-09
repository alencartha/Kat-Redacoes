import { handleSignUp } from '../../services/index.js';
import {
  validatePassword,
  validateEmptyInput,
} from '../../utils/validation.js';
import showModal from '../../components/showModal.js';
import { onNavigate } from '../../utils/history.js';


export const createAccount = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
        <form id="formCreateAccount">
            <section>
                <h2>Novo por aqui?</h2>
                <h2>Cadastre-se</h2>
                <h3>É rápido e fácil!</h3>
            </section>
            <p class="inputInformationCreate">
                <input class="input" id="firstName" type="text" placeholder="Nome" required>
                <input class="input" id="lastName" type="text" placeholder="Sobrenome" required>
                <input class="input" id="email" type="email" placeholder="E-mail" required>
                <input class="input" id="password" type="password" placeholder="Senha" required>
                <input class="input" id="samePassword" type="password" placeholder="Repita sua senha" required>
            </p>
            <button type="button" id="btnCreateAccount">Cadastre-se</button>
            <p><a id="login-route">Ir para Login</a></p>
        </form>
        <img id="img-register" src='../../img/readme/KAT_Redacoes.jpg'/>
        
    `;
  const btnCreateAccount = rootElement.querySelector('#btnCreateAccount');
  const routeLogin = rootElement.querySelector('#login-route');

  routeLogin.addEventListener('click', (event) => {
    onNavigate('/');
  })

  btnCreateAccount.addEventListener('click', (event) => {
    event.preventDefault();
    const email = rootElement.querySelector('#email').value;
    const password = rootElement.querySelector('#password').value;
    const samePassword = rootElement.querySelector('#samePassword').value;
    const firstName = rootElement.querySelector('#firstName').value;
    const lastName = rootElement.querySelector('#lastName').value;
    const returnValidatePassword = validatePassword(password, samePassword);
    if (!returnValidatePassword) {
      const errorMessage = 'As senhas digitadas são divergentes';
      showModal(errorMessage);
    }
    const returnValidateInput = validateEmptyInput(firstName, lastName);
    if (!returnValidateInput) {
      const errorMessage =
        'Os campos Nome e Sobrenome são de preenchimento obrigatório';
      showModal(errorMessage);
    }
    if (returnValidatePassword && returnValidateInput) {
      handleSignUp(email, password)
        .then((user) => {
          const userName = `${firstName} ${lastName}`;
          user.user.updateProfile({ displayName: userName });
          const message = 'Usuário criado com sucesso!';
          showModal(message);
          onNavigate('/');
        })
        .catch((error) => {
          const errorMessage = error.message;
          showModal(errorMessage);
        });
    }
  });
  return rootElement;
};
