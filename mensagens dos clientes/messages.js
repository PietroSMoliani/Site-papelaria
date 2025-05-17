document.addEventListener('DOMContentLoaded', () => {
    const messageList = document.getElementById('messageList');

    // Função para carregar mensagens armazenadas no localStorage
    const loadMessages = () => {
        const messages = JSON.parse(localStorage.getItem('users')) || [];
        messageList.innerHTML = ''; // Limpar mensagens existentes

        if (messages.length === 0) {
            const noMessages = document.createElement('p');
            noMessages.textContent = "Nenhuma mensagem recebida até o momento.";
            messageList.appendChild(noMessages);
            return;
        }

        messages.forEach(({ name, email, message }) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span><strong>Nome:</strong> ${name}</span>
                <span><strong>Email:</strong> ${email}</span>
                <p><strong>Mensagem:</strong> ${message}</p>
            `;
            li.style.marginBottom = '10px';
            li.style.padding = '10px';
            li.style.border = '1px solid #ccc';
            li.style.borderRadius = '5px';
            li.style.backgroundColor = '#f7f7f7';
            messageList.appendChild(li);
        });
    };

    // Carregar mensagens ao carregar a página
    loadMessages();
});
