function EnviarDados() {
    
    const formulario = document.querySelector('form')
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    formulario.style.display = 'none';
    const mensagem = document.getElementById('message')
    mensagem.style.display = 'block'
    event.preventDefault()

    const dadosUsuario = {
        Nome: nome,
        Email: email,
        Telefone: telefone
    }
    
    console.log(dadosUsuario);
    mensagem.querySelector('p:nth-child(2)').textContent = "Nome: " + nome
    mensagem.querySelector('p:nth-child(3)').textContent = "Email: " + email
    mensagem.querySelector('p:nth-child(4)').textContent = "Telefone: " + telefone
  
}
