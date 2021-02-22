import { db } from "./firebase.js";

export function savePost() {
  const cardTitle = document.getElementById("title");
  const button = document.getElementById("saveButton");
  const subtitleCard = document.getElementById("subtitle");
  const bodyCard = document.getElementById("body");

  const createPost = button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(cardTitle.value);
    console.log(subtitleCard.value);
    console.log(bodyCard.value);

    db.collection("newPost2")
      .add({
        Title: cardTitle.value,
        Subtitle: subtitleCard.value,
        Body: bodyCard.value,
        Fecha: Date.now(),
      })
      .then((res) => {
        console.log("mensaje guardado");
        cardTitle.value = "";
      })
      .catch((e) => console.log(e));

    cardTitle.value = "";
  });
}

//Leer Data

export const createpost = () => {
  document.getElementById("commentary");

  db.collection("newPost2")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((message) => {
        createCard(message.data());
        console.log(`${message.id} => ${message.data().title}`);
        commentary.innerHTML += createCard();
       
      });
    });
};

