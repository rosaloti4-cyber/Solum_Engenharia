
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

import {
    getDatabase,
    ref,
    onValue
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

// Configuração do projeto Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBjrV0tvKkDvW8DGSKLGsYu1m4yWsRrrYs",
    authDomain: "deslizamentos-de-taludes.firebaseapp.com",
    databaseURL: "https://deslizamentos-de-taludes-default-rtdb.firebaseio.com",
    projectId: "deslizamentos-de-taludes",
    storageBucket: "deslizamentos-de-taludes.firebasestorage.app",
    messagingSenderId: "1097521699180",
    appId: "1:1097521699180:web:350fecac3130751e977b49",
    measurementId: "G-8FHBN9XDZ2"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);

// Conexão com o Realtime Database
const database = getDatabase(app);

// Disponibiliza os recursos para o Dashboard
export { database, ref, onValue };
