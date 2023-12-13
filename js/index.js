// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDgHw5sV3FJfl9ITlg4BzX3_a7bbw7uONg",
  authDomain: "github-login-cd127.firebaseapp.com",
  projectId: "github-login-cd127",
  storageBucket: "github-login-cd127.appspot.com",
  messagingSenderId: "522390776576",
  appId: "1:522390776576:web:52ea873d6af72d427061e5"
};

// Inicialización de Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app); // Agregamos Firebase Firestore

document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const signInButton = document.getElementById("registro");

  // Manejar el evento de registro de usuarios
  signInButton.addEventListener('click', function () {
      const username = usernameInput.value;
      const password = passwordInput.value;

      // Registrar datos en Firestore
      const usersRef = db.collection('users'); // Cambia 'users' al nombre de tu colección en Firestore
      usersRef.add({
          username: username,
          password: password
          // Puedes agregar más campos de información del usuario aquí
      })
      .then((docRef) => {
          console.log('Datos de usuario registrados en Firestore con ID:', docRef.id);
      })
      .catch((error) => {
          console.error('Error al registrar datos en Firestore:', error);
      });
  });
});
