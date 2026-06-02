import { Account } from 'https://cdn.jsdelivr.net/npm/appwrite@latest/+esm';

const account = new Account(window.appwriteClient);

export async function loginWithMatricule(matricule, password) {
    const email = `${matricule}@texlo.app`;
    return await account.createEmailSession(email, password);
}

export async function getCurrentUser() {
    try {
        return await account.get();
    } catch {
        return null;
    }
}

export async function logout() {
    await account.deleteSession('current');
}

export function onAuthStateChanged(callback) {
    setInterval(async () => {
        const user = await getCurrentUser();
        callback(user);
    }, 3000);
}
