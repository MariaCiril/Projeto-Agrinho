  <script>
        // Controle de Login
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('loginSection').classList.add('hidden');
            document.getElementById('chatSection').classList.remove('hidden');
        });

        // Recuperação de Senha
        document.getElementById('recoveryForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Link de recuperação enviado!');
            showLogin();
        });

        // Controle de Chat
        let selectedUser = null;

        function showRecovery() {
            document.getElementById('loginForm').classList.add('hidden');
            document.getElementById('recoveryForm').classList.remove('hidden');
        }

        function showLogin() {
            document.getElementById('recoveryForm').classList.add('hidden');
            document.getElementById('loginForm').classList.remove('hidden');
        }

        function selectUser(userId) {
            selectedUser = userId;
            // Implementar lógica para carregar chat privado
        }

        function sendMessage() {
            const message = document.getElementById('messageText').value;
            if(message.trim()) {
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message';
                messageDiv.textContent = selectedUser ? 
                    `[Privado] ${message}` : 
                    `[Público] ${message}`;
                
                document.getElementById('chatMessages').appendChild(messageDiv);
                document.getElementById('messageText').value = '';
            }
        }
    </script>