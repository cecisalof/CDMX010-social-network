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


const cardTitle = document.getElementById('title');
const button = document.getElementById('saveButton');

export const createPost = button.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(cardTitle.value);
  
  if(!cardTitle.value.trim()){
    console.log("input vacio")
    return
  }

firebase.firestore().collection("newPost").add({
  title: cardTitle.value,
  fecha: Date.now()
})
.then(res => {console.log("mensaje guardado")})
.catch(e => console.log(e))

cardTitle.value = ''

});

firebase.firestore().collection("newPost")
.onSnapshot(query => {
  
})