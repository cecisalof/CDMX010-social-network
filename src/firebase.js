// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line import/no-cycle
import { renderPost } from './home.js';
import { onNavigate } from './routes.js';

const firebaseConfig = {

  apiKey: 'AIzaSyCE3V_6hn_oiPhJAvfRLJLygBVct9fIZRg',
  authDomain: 'novaapp-67e15.firebaseapp.com',
  projectId: 'novaapp-67e15',
  storageBucket: 'novaapp-67e15.appspot.com',
  messagingSenderId: '282489634860',
  appId: '1:282489634860:web:97a4ad5b81716f2b0f5189',
  measurementId: 'G-N31JQDJTSM',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();

// GUARDA INFORMACIÓN DE USUARIIO EN LA BASE DE DATOS.
export const savePost = (post) => db.collection('newPost')
  .add({
    Title: post.title,
    Subtitle: post.subtitle,
    Body: post.body,
    Fecha: Date.now(),
    Like: [],
  });

// TRAE LA DATA DE LA BASE DE DATOS.
export const getData = () => {
  const postContainer = document.getElementById('printData');
  db.collection('newPost').orderBy('Fecha', 'desc')
    .onSnapshot((querySnapshot) => {
      postContainer.innerHTML = '';
      querySnapshot.forEach((doc) => {
        // console.log(doc);
        const dataBase = doc.data();
        // console.log(doc.data());
        dataBase.id = doc.id; // CON ESTE ACCEDEMOS A LOS ID DE NUESTROS POST
        const id = dataBase.id; // AQUÍ arroja el ID del post
        postContainer.innerHTML += renderPost(dataBase, id);
        // console.log(dataBase);
      });
    });
};

// CREATING A NEW POST IN FIREBASE
export const makingPost = () => {
  const titleCard = document.getElementById('title');
  const subtitleCard = document.getElementById('subtitle');
  const bodyCard = document.getElementById('body');

  const post = {
    title: titleCard.value,
    subtitle: subtitleCard.value,
    body: bodyCard.value,
    fecha: Date.now(),
    Like: [],
  };

  if (!titleCard.value.trim() || !subtitleCard.value.trim() || !bodyCard.value.trim()) {
    alert('Input vacío!');
    return;
  }

  savePost(post)
    .then((doc) => {
      console.log('Document written whith ID: ', doc.id);
      titleCard.value = '';
      subtitleCard.value = '';
      bodyCard.value = '';
    })
    .catch((error) => console.log(error));
};

// BORRA LOS POST
export const deletePost = (id) => {
  // console.log('We are inside deletePost');
  console.log('form deletePost Function', id);
  db.collection('newPost').doc(id).delete()
    .then(() => {
      console.log('Post was deleted in firebase console');
    })
    .catch((error) => {
      console.log('An error have ocurred!');
    });
  // console.log(id);
};

// LIKE
const currentPost = (id) => db.collection('newPost').doc(id).get();
const postRef = (id) => db.collection('newPost').doc(id);

export const likesCounter = (id) => {
  const userId = auth.currentUser.uid;
  console.log(userId);
  // const currentPost = (id) => db.collection('newPost').doc(id).get();
  currentPost(id)
    .then((doc) => {
      const postData = doc.data();
      console.log(postData);
      const likeArray = postData.Like;
      console.log(likeArray);
      const likeViewer = likeArray.includes(userId);

      if (likeViewer === false) {
        postRef(id).update({ Like: firebase.firestore.FieldValue.arrayUnion(userId) });
      } else {
        postRef(id).update({ Like: firebase.firestore.FieldValue.arrayRemove(userId) });
      }
    })
    .catch((error) => {
      console.log('An error had ocurred!');
    });
};

// EDIT POST
export const editPost = (id) => {
  const postData = db.collection('newPost').doc(id);
  let editedTitle = document.getElementById('titleEdit').value;
  let editedSubtitle = document.getElementById('subtitleEdit').value;
  let editedBody = document.getElementById('bodyEdit').value;
  // currentPost(id)
  //   .then((post) => {
  postData.update({
    Title: editedTitle,
    Subtitle: editedSubtitle,
    Body: editedBody,
    Date: Date.now(),
    Like: [],
  }).then(() => {
    console.log('Post was edited in firebase console');
  })
    .catch((error) => {
      console.log('An error have ocurred!');
    });

  console.log(postData);
};

// // AUTH FROM FIREBASE
export const signUpWithEmailAndPassword = () => {
  const userName = document.getElementById('userName').value;
  const userEmail = document.getElementById('userEmail').value;
  const userPassword = document.getElementById('userPassword').value;
  const expression = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  // const validate = expression.test(userEmail);
  // console.log("The user`s values are", userName, userEmail, userPassword);
  /*
    const user = {
      Name: userName.value,
      Email: userEmail.value,
      Password: userPassword.value,
    };
  */
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
export const signInWithEmailAndPassword = (user) => {
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
    // TRAER DATOS DE LA REDIRECCIÓN DE GOOGLE PARA ACREDITAR EL SIGN UP EN FIREBASE
    // auth.getRedirectResult()
    .then(result => {
      onNavigate('/home');
    }).catch(error => {
      alert('Un error ha ocurrido. Inténtelo más tarde');
    });
};

// export const signInWithGoogle = () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   // auth.signInWithRedirect(provider);
//   auth.getRedirectResult()
//     .then((result) => {
//       console.log('entra a la promesa de getRedirect');
//       onNavigate('/home');
//     }).catch((error) => {
//       console.log('da error en el get redirect!');
//       // Handle Errors here.
//       let errorCode = error.code;
//       let errorMessage = error.message;
//       // The email of the user's account used.
//       let email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       let credential = error.credential;
//       // ...
//     });
// };

// IS A VIEWER THAT CHECKS IF THE USER EXISTS
export const userViewer = auth.onAuthStateChanged(user => {
  // onNavigate('/');
  if (user) {
    console.log(user);
    const animate = () => {
      setTimeout(() => {
        onNavigate('/home');
      }, 3000);
    };
    animate();
  } else {
    console.log('no existe el usuario');
    const animate = () => {
      setTimeout(() => {
        onNavigate('/login');
      }, 3000);
    };
    animate();
  }
});
