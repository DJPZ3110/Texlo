// ui.js – Gestion de l'affichage des vues
export function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(`${viewId}-view`);
    if (target) target.classList.add('active');
}

// Gestion du formulaire de connexion
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const matricule = document.getElementById('matricule').value.trim();
            const password = document.getElementById('password').value;
            const errorDiv = document.getElementById('login-error');
            try {
                const { loginWithMatricule } = await import('./auth.js');
                await loginWithMatricule(matricule, password);
                // La redirection sera gérée par onAuthStateChanged dans app.js
            } catch (error) {
                errorDiv.textContent = error.message;
                errorDiv.style.display = 'block';
            }
        });
    }
});
