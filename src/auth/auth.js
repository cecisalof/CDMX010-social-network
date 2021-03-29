// // import { userAuth } from './firebase.js';
// import { onNavigate } from './routes.js';
// import { auth } from './firebase.js';

// // // AUTH FROM FIREBASE
// export const signUpWithEmailAndPassword = () => {
//   const userName = document.getElementById('userName').value;
//   const userEmail = document.getElementById('userEmail').value;
//   const userPassword = document.getElementById('userPassword').value;
//   const expression = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
//   // const validate = expression.test(userEmail);
//   // console.log("The user`s values are", userName, userEmail, userPassword);
//   /*
//     const user = {
//       Name: userName.value,
//       Email: userEmail.value,
//       Password: userPassword.value,
//     };
//   */
//   if (userName.length === 0
//     || userEmail.length === 0
//     || userPassword.length === 0) {
//     alert('Inputs vacío!');
//   } else if (!expression.test(userEmail)) {
//     alert('No es un formato de correo válido!');
//   } else {
//     auth.createUserWithEmailAndPassword(userEmail, userPassword)
//       .then(() => {
//         alert(`Bienvenida a novaApp! ${userName}`);
//         onNavigate('/home');
//       })
//       .catch((error) => {
//         alert('Usuario ya registrado');
//         onNavigate('/signIn');
//         let errorCode = error.code;
//         let errorMessage = error.message;
//       });
//   }
// };

// // SIGN-IN
// export const signInWithEmailAndPassword = (user) => {
//   const userEmail = document.getElementById('userEmail').value;
//   const userPassword = document.getElementById('userPassword').value;
//   const expression = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

//   if (userEmail.length === 0
//     || userPassword.length === 0) {
//     alert('Inputs vacío!');
//   } else if (!expression.test(userEmail)) {
//     alert('No es un formato de correo válido!');
//   } else {
//     auth.signInWithEmailAndPassword(userEmail, userPassword)
//       .then((user) => {
//         onNavigate('/home');
//       })
//       .catch((error) => {
//         alert('El correo o la contraseña ingresados son inválidos');
//         let errorCode = error.code;
//         let errorMessage = error.message;
//       });
//   }
// };

// // SIGN-OUT
// export const signOut = () => {
//   auth.signOut()
//     .then((user) => {
//       onNavigate('/');
//     }).catch((error) => {
//       alert('Un error ha ocurrido. Inténtalo de nuevo'); // Más adelante sería un error 404.
//     });
// };

// export const signUpWithGoogle = () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   auth.signInWithPopup(provider)
//     // TRAER DATOS DE LA REDIRECCIÓN DE GOOGLE PARA ACREDITAR EL SIGN UP EN FIREBASE
//     // auth.getRedirectResult()
//     .then(result => {
//       onNavigate('/home');
//     }).catch(error => {
//       alert('Un error ha ocurrido. Inténtelo más tarde');
//     });
// };

// // export const signInWithGoogle = () => {
// //   const provider = new firebase.auth.GoogleAuthProvider();
// //   // auth.signInWithRedirect(provider);
// //   auth.getRedirectResult()
// //     .then((result) => {
// //       console.log('entra a la promesa de getRedirect');
// //       onNavigate('/home');
// //     }).catch((error) => {
// //       console.log('da error en el get redirect!');
// //       // Handle Errors here.
// //       let errorCode = error.code;
// //       let errorMessage = error.message;
// //       // The email of the user's account used.
// //       let email = error.email;
// //       // The firebase.auth.AuthCredential type that was used.
// //       let credential = error.credential;
// //       // ...
// //     });
// // };

// // IS A VIEWER THAT CHECKS IF THE USER EXISTS
// export const userViewer = auth.onAuthStateChanged(user => {
//   // onNavigate('/');
//   if (user) {
//     console.log(user);
//     const animate = () => {
//       setTimeout(() => {
//         onNavigate('/home');
//       }, 3000);
//     };
//     animate();
//   } else {
//     console.log('no existe el usuario');
//     const animate = () => {
//       setTimeout(() => {
//         onNavigate('/login');
//       }, 3000);
//     };
//     animate();
//   }
// });