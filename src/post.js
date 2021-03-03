export const post = (containner) => {
  const html = `
  <div id="header">
    <img id="snipple" src="resources/garabato.png" alt="logo" class= "link">
    <img id="userAvatar" class="link" src="resources/user.png" alt="genericAvatar">
    <!-- <img id="searchIcon" class="link" src="resources/search.png" alt "searchIcon"> -->
  </div>
  <div>
    <h1> I am the Post Page </h1>
  </div>
`;
  // eslint-disable-next-line no-param-reassign
  containner.innerHTML = html;
};
