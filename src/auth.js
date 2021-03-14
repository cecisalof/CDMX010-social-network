// import { userAuth } from './firebase.js';
import { onNavigate } from './routes.js';
import { auth } from './firebase.js';

// // AUTH FROM FIREBASE

export const signUpWithEmailAndPassword = () => {
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("userPassword").value;
  const expression = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  // const validate = expression.test(userEmail);
  // console.log("The user`s values are", userName, userEmail, userPassword);

  const user = {
    Name: userName.value,
    Email: userEmail.value,
    Password: userPassword.value,
  };

  if (userName.length === 0
    || userEmail.length === 0
    || userPassword.length === 0) {
    alert('Inputs vacío!');
  } else if (!expression.test(userEmail)) {
    alert('No es un formato de correo válido!');
  }
  auth.createUserWithEmailAndPassword(userEmail, userPassword)
    .then(() => {
      alert('Bienvenido a novaApp!');
      onNavigate('/home');
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
    });
};

// SIGN-IN
export const signInWithEmailAndPassword = () => {
  const userEmail = document.getElementById('userEmail').value;
  const userPassword = document.getElementById('userPassword').value;

  auth.signInWithEmailAndPassword(userEmail, userPassword)
    .then((user) => {
      onNavigate('/home');
    })
    .catch((error) => {
      alert('El correo o la contraseña ingresados son inválidos');
      let errorCode = error.code;
      let errorMessage = error.message;
    });
};

// SIGN-OUT
export const signOut = () => {
  auth.signOut()
    .then((user) => {
      onNavigate('/');
    }).catch((error) => {
      alert('Un error ha ocurrido. Inténtalo de nuevo'); // Más adelante sería un error 404.
    });
}