document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'As senhas não coincidem.';
    } else {
        errorMessage.textContent = '';
        // Aqui você pode adicionar a lógica para enviar os dados ao servidor
        alert('Cadastro realizado com sucesso!');
    }
});