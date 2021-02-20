// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// firebase.analytics();
const db = firebase.firestore();

const docRef = db.doc('newPost/Title');
const cardContainer = document.getElementById('cardContainer');
const titleCard = document.getElementById('title');
const subtitleCard = document.getElementById('subtitle');
const bodyCard = document.getElementById('body');
const button = document.getElementById('saveButton');

export const createPost = button.addEventListener('click', (e) => {
  e.preventDefault(); // Prevenimos que el navegador no se actualice y que no haga nada por defecto
  const textToSave = titleCard.value;
  const subtitleToSave = subtitleCard.value;
  const bodyToSave = bodyCard.value;
  // console.log(`Im going to save ${textToSave} to Firestore`);
  console.log(titleCard.value + subtitleCard.value + bodyCard.value);
  // si no hay texto o manda un texto vacío:
  if (!textToSave.trim()) {
    console.log('Input vacío!');
    return;
  }
  // Aquí empieza la promesa para guardar los datos de la publicación:
  db.collection('newPost').add({
    Title: titleCard.value,
    Subtitle: subtitleCard.value,
    Body: bodyCard.value,
    // para que guarde la fecha de la publicación cuando el usuario de click en "publicar"
    fecha: Date.now(),
  })
  // lo anterior es una promesa por lo que debemos cachar el error si es que falla.
    .then(result => { console.log('Publicación guardada con éxito!'); })
    .catch(error => console.log(e));
  // borramos campos del input al dar click en "Publicar"
  titleCard.value = '';
  subtitleCard.value = '';
  bodyCard.value = '';




    // .onSnapshot(post => {
    //   //console.log(post);
    //   post.forEach(doc =>{
    //     console.log(doc);
    //   });
    // });

//   docRef.set({
//     Title: textToSave,
//   });
// });

// db.collection('newPost')
//   .onSnapshot(post => {
//     //console.log(post);
//     post.forEach(doc =>{
//       console.log(doc);
//     });
});
