// import { db } from './firebase.js';

function createCard(e) {
  const card = `
<div>
    <div id="cardContainer">
        <img id="authorAvatar" class="icons" src="resources/user.png" alt="authorAvatar">
        <h2>${e.title}</h2>
        <h3>${e}</h3>
        <p>${e}</p>
        <img id="readingTime" class="icons" src="resources/clock.png" alt="readingTime">
    </div>
    `;
  return card;
}

export default createCard();
