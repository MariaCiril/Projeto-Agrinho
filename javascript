/ Controle de navegação
function showRecovery() {
    document.getElementById('loginContainer').classList.add('hidden');
    document.getElementById('recoveryContainer').classList.remove('hidden');
}

function showLogin() {
    document.getElementById('recoveryContainer').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');
}

// Controle de login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const userData = {
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        telefone: document.getElementById('telefone').value
    };

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();
        
        if(response.ok) {
            document.getElementById('loginContainer').classList.add('hidden');
            document.getElementById('dashboard').classList.remove('hidden');
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert('Erro na conexão');
    }
});

// Recuperação de senha
document.getElementById('recoveryForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('recoveryEmail').value;

    try {
        const response = await fetch('/recovery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

        const data = await response.json();
        alert(data.message);
    } catch (error) {
        alert('Erro na conexão');
    }
});

// Logout
function logout() {
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');
    document.getElementById('loginForm').reset();
}