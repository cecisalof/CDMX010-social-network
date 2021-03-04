export const login = (container) => {
  const html = `
  <div id="header">
    <img id="snipple" src="resources/garabato.png" alt="logo" class= "link" data-action ="home">
    <img id="userAvatar" class="link" src="resources/user.png" alt="genericAvatar"  data-action ="login">
    <!-- <img id="searchIcon" class="link" src="resources/search.png" alt "searchIcon"> -->
  </div>
  <div>
    <h1> I am the Log In Page </h1>
  </div>
  `;
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
};
