// import { auth } from '../firebase.js';

// IS A VIEWER THAT CHECKS IF THE USER EXISTS
export const userViewer = firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user');// User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // let uid = user.uid;
    // ...
  } else {
    console.log('no existe el usuario');
    // User is signed out
    // ...
  }
});

// AUTH with Google
export const signUpWithGoogle = () => {
  const signUpButton = document.querySelector('#signUpWithGoogle');
  signUpButton.addEventListener('click', async () => {
    console.log('Has dado click en Registrarse con Google!');
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithRedirect(provider); // better UX for mobile version
    } catch (error) {
      console.log(error);
    }
  });
};

// // AUTH FROM FIREBASE
// firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((user) => {
//         // Signed in
//         // ...
//     })
//     .catch((error) => {
//         let errorCode = error.code;
//         let errorMessage = error.message;
//         // ..
//     });

// SIGN-IN
// firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((user) => {
//     // Signed in
//     // ...
//   })
//   .catch((error) => {
//     let errorCode = error.code;
//     let errorMessage = error.message;
//   });

// // SIGN-OUT
// firebase.auth().signOut().then(() => {
//     // Sign-out successful.
// }).catch((error) => {
//     // An error happened.
// });
