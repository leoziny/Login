const form = document.querySelector('#my-form');
const loginButton = document.querySelector('.login-button');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // impede que a página seja recarregada
    const inputUsuario = document.querySelector('#inputUsuario');
    const inputSenha = document.querySelector('#inputSenha');
    const usuario = inputUsuario.value;
    const senha = inputSenha.value;
    alert(`Usuario: ${usuario} Senha: ${senha} `);
});
