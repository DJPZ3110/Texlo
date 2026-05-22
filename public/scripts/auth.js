// auth.js – Gestion de l'authentification
import { getAuth, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

export const auth = getAuth();

// Fonction de connexion avec matricule
export async function loginWithMatricule(matricule, password) {
    const email = `${matricule}@texlo.app`; // transformation pour Firebase Auth
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

// Déconnexion
export async function logout() {
    await signOut(auth);
}
