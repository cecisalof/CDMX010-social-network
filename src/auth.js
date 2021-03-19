// import { userAuth } from './firebase.js';
import { onNavigate } from './routes.js';
import { auth } from './firebase.js';

// // AUTH FROM FIREBASE
export const signUpWithEmailAndPassword = () => {
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("userPassword").value;
  const expression = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (userName.length === 0
    || userEmail.length === 0
    || userPassword.length === 0) {
    alert('Inputs vacío!');
  } else if (!expression.test(userEmail)) {
    alert('No es un formato de correo válido!');
  } else {
    auth.createUserWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        alert(`Bienvenida a novaApp! ${userName}`);
        onNavigate('/home');
      })
      .catch((error) => {
        alert('Usuario ya registrado');
        onNavigate('/signIn');
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  }
};

// SIGN-IN
export const signInWithEmailAndPassword = () => {
  const userEmail = document.getElementById('userEmail').value;
  const userPassword = document.getElementById('userPassword').value;
  const expression = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (userEmail.length === 0
    || userPassword.length === 0) {
    alert('Inputs vacío!');
  } else if (!expression.test(userEmail)) {
    alert('No es un formato de correo válido!');
  } else {
    auth.signInWithEmailAndPassword(userEmail, userPassword)
      .then((user) => {
        onNavigate('/home');
      })
      .catch((error) => {
        alert('El correo o la contraseña ingresados son inválidos');
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  }
};

// SIGN-OUT
export const signOut = () => {
  auth.signOut()
    .then((user) => {
      onNavigate('/');
    }).catch((error) => {
      alert('Un error ha ocurrido. Inténtalo de nuevo'); // Más adelante sería un error 404.
    });
};

export const signUpWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      onNavigate('/home');
    }).catch((error) => {
      console.log(error);
      // eslint-disable-next-line no-alert
      alert(errorMessage, 4000);
    });
};


// // IS A VIEWER THAT CHECKS IF THE USER EXISTS
// export const userViewer = auth.onAuthStateChanged(user => {
//   let uid = user.uid;
//   if (user === uid) {
//     console.log(user);
//     console.log(uid);
//     onNavigate('/home');
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     // ...
//   } else {
//     console.log('no existe el usuario');
//     // User is signed out
//     // ...
//   }
// });
