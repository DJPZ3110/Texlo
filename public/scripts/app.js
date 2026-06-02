import { onAuthStateChanged } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    onAuthStateChanged((user) => {
        if (user) {
            window.switchView('admin');
        } else {
            window.switchView('connexion');
        }
    });
});
