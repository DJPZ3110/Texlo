import { loginWithMatricule } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    const views = document.querySelectorAll('.view');
    const navBtns = document.querySelectorAll('.nav-btn');
    const userBadge = document.getElementById('userBadge');

    const viewMeta = {
        connexion: { showBadge: false },
        admin: { showBadge: true, role: 'Admin' },
        sections: { showBadge: true, role: 'Enseignant' },
        justificatif: { showBadge: true, role: 'Enseignant' }
    };

    window.switchView = function(viewId) {
        views.forEach(v => v.classList.remove('active'));
        const target = document.getElementById('view-' + viewId);
        if (target) target.classList.add('active');

        navBtns.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.nav-btn[data-view="${viewId}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        const meta = viewMeta[viewId];
        if (meta) {
            userBadge.style.display = meta.showBadge ? 'flex' : 'none';
        }
    };

    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(btn.dataset.view);
        });
    });

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const matricule = document.getElementById('matricule').value.trim();
            const password = document.getElementById('password').value;
            const errorDiv = document.getElementById('login-error');
            errorDiv.style.display = 'none';

            try {
                await loginWithMatricule(matricule, password);
            } catch (error) {
                errorDiv.textContent = 'Échec de connexion : ' + (error.message || 'Matricule ou mot de passe incorrect.');
                errorDiv.style.display = 'block';
            }
        });
    }
});
