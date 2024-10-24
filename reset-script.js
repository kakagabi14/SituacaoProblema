document.getElementById('reset-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailUsername = document.getElementById('email-username').value;
    const responseMessage = document.getElementById('response-message');

    // Simulação de envio de instruções (aqui você integraria com seu backend)
    if (emailUsername) {
        responseMessage.textContent = 'Instruções para redefinir sua senha foram enviadas para seu email.';
    } else {
        responseMessage.textContent = 'Por favor, insira um email ou nome de usuário válido.';
    }
});
