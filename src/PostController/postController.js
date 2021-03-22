import { deleteConfirmation } from './deleteConfirmation.js';

export const deleteModal = () => {
  const modalContainer = document.getElementById('modalContainer');
  console.log('in deleteModal function', modalContainer);
  deleteConfirmation(modalContainer);

  const modal = document.querySelector('.modal');
  const trigger = document.querySelector('#trigger');
  const closeButton = document.querySelector('.close-button');

  console.log(modal);
  console.log(trigger);
  console.log(closeButton);

  modal.classList.toggle('show-modal');

  window.onclick = (event) => {
    if (event.target === modal || event.target === closeButton) {
      modal.classList.toggle('show-modal');
    }
  };
};

// const currentPost = (id) => firebase.db.collection('newPost').doc(id).get(); 
// mandar a firebase.js
// // const postForm = document.getElementById('newPost'); // prescindir
// // const editStatus = false; // incluir dentro de editPost

// const function2 = (id) => { // fusionar con editPost
//   // cambiaría el nombre de esta variable
//   const updatePost = firebase.db.collection('newPost').doc(id);// sólo quiere acceder al post específico
//   // lo mismo que cuurent Form pero sin .get()

//   // se guardan valores de input en variables para luego editar esa info.
//   const title = document.getElementById('title').value;
//   const subtitle = document.getElementById('subtitle').value;
//   const body = document.getElementById('body').value;

//   // .update() es un método de firebase? Supongo que aquí se actualizan los datos
//   // esto debería ser parte de EDITPOST no?
//   return updatePost.update({
//     Title: title,
//     Subtitle: subtitle,
//     Body: body,
//     Fecha: Date.now(),
//   });
// };

// export function editPost(id) {
//   const postContainer = document.getElementById('printData');// Estábamos intentendo resolver el tema de la duplicación de post
//   currentPost(id)
//     .then((result) => {
//       const infoData = result.data(); // trae la información del post específico que pasa curretPost(id)

//       // Creo que aquí nos repetimos mucho :) podríamos tener las variables de función2 y sólo igualarle la nueva info.
//             // agregar los valores de la publicación en los input del form de publicación
//       document.getElementById('title').value = infoData.Title;
//       document.getElementById('subtitle').value = infoData.Subtitle;
//       document.getElementById('body').value = infoData.Body;
//       const boton = document.getElementById('btn');
//       boton.innerHTML = 'Editar';

//       boton.addEventListener('click', () => {
//         postContainer.innerHTML = '';// estábamos probando solucionar la duplicación de post
//         function2(id) // es un making post2 que actualiza/guarda los cambios nuevos

//           .then(() => {
//             console.log('Updated!');
//             boton.innerHTML = 'Publicar';
//             document.getElementById('nombre').value = '';
//             document.getElementById('subtitle').value = '';
//             document.getElementById('body').value = '';
//           }).catch((error) => {});
//       });
//     })
//     .catch((error) => console.log(error));// no entiendo este catch :)
// }

// /*
//   document.getElementById('title').value = title;
//   document.getElementById('subtitle').value = subtitle;
//   document.getElementById('body').value = body;
//   const buttonE = document.getElementById('saveButton');
//   buttonE.innerText = 'Editar';
//   */

// /*
// // LIKES FUNCTION
// const likesFunction = (id) => {
//   let likes = 0;
//   const heartButton = document.querySelector('like');
//   const likeCounter = document.querySelector('likesNumber');
//   const click = id;
//   likeCounter.innerHTML = ++likes;
// };
// */

// // // CONTROLADOR::
// // const postController = (click, id) => {
// //   console.log(click, id);
// //   if (click === 'delete') {
// //     deletePostFunction(id);
// //   } if (click === 'like') {
// //     // likesFunction(id);
// //   }
// // };


// // // detecta el target para saber qué función detonar
// // const addButtonEventsPost = () => {
// //   const parentContainer = document.querySelectorAll('#root');
// //   parentContainer.forEach((btn) => {
// //     btn.addEventListener('click', (e) => {
// //       e.preventDefault();
// //       const id = e.target.dataset.id;
// //       const clickEvent = e.target.dataset.action;
// //       console.log('HOLO', clickEvent, id);
// //       postController(clickEvent, id);
// //     });
// //   });
// // };

// // addButtonEventsPost();
