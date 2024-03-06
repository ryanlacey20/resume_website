import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

const isUserAuthenticated = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            resolve(!!user);
        }, reject);
    });
};

export { isUserAuthenticated };
