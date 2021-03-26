export const likeButton = () => {
  const button = document.getElementById('likeButton');
  button.addEventListener('click', () => {
    if (button.classList.contains('far')) {
      button.classList.remove('far');
      button.classList.add('fas');
    } else {
      button.classList.remove('fas');
      button.classList.add('far');
    }
  });
};
