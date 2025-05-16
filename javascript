// Controle de Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validação simples (em sistema real usar autenticação segura)
    if(username === 'ecousuario' && password === 'eco123') {
        document.getElementById('loginSection').classList.remove('active');
        document.getElementById('exchangeSection').classList.add('active');
        document.getElementById('loginError').textContent = '';
    } else {
        document.getElementById('loginError').textContent = 'Credenciais inválidas! Tente novamente.';
    }
});

// Sistema de Troca
document.getElementById('exchangeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const oilAmount = document.getElementById('oilAmount').value;
    const soapAmount = oilAmount; // 1:1
    
    const resultHTML = `
        <h3>Troca Confirmada! ♻️</h3>
        <p>Você está trocando: ${oilAmount}L de óleo</p>
        <p>Você receberá: ${soapAmount} barras de sabão ecológico</p>
        <p>Data da retirada: ${new Date().toLocaleDateString()}</p>
    `;
    
    document.getElementById('exchangeResult').innerHTML = resultHTML;
});

// Logout
function logout() {
    document.getElementById('exchangeSection').classList.remove('active');
    document.getElementById('loginSection').classList.add('active');
    document.getElementById('loginForm').reset();
    document.getElementById('exchangeForm').reset();
    document.getElementById('exchangeResult').innerHTML = '';
}