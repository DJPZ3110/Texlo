// app.js – Point d'entrée principal de l'application Texlo
import { auth } from './auth.js';
import { showView } from './ui.js';

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Par défaut, on affiche la vue de connexion
    showView('auth');

    // Vérifier si l'utilisateur est déjà connecté
    auth.onAuthStateChanged(user => {
        if (user) {
            // Rediriger vers le tableau de bord (à implémenter)
            showView('dashboard');
        } else {
            showView('auth');
        }
    });
});
