import firebase from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBukOLCXVz7JeL34d6LuTYfAplZcZ5ILmE",
    authDomain: "ztm-vue3.firebaseapp.com",
    projectId: "ztm-vue3",
    storageBucket: "ztm-vue3.appspot.com",
    appId: "1:465457160906:web:8cc679c222d414f8764a33",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
