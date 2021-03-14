import { userAuth } from './firebase.js';

// // AUTH FROM FIREBASE

export const singUpWithEmailAndPassword = () => {
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("userPassword").value;
  console.log("The user`s values are", userName, userEmail, userPassword);

  if (
    !userName.value.trim() ||
    !userEmail.value.trim() ||
    !userPassword.value.trim()
  ) {
    alert('Inputs vacío!');
    return;
  }

  userAuth(userEmail, userPassword)
    .then(user => {
      // Signed in
      // ...
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      // ..
    });
};

// // SIGN-IN
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
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });