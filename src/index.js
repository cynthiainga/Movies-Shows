import './style.css';
import { fetchShows, itemContainer, logo } from './modules/utils.js';
import displayAnime from './modules/display.js';
import { closePopup, displayPopup } from './modules/controlls.js';
import showPopup from './modules/comments.js';
import { postLikes, updateLikes } from './modules/likes.js';
import { sendComment, getComment } from './modules/involvementApi.js';
import myLogo from './images/logo.jpg';

logo.innerHTML = `<a href='#'><img class='myLogo' src='${myLogo}'></a>`;

const seePopup = (array) => {
  const commentBtn = document.querySelectorAll('.comment-btn');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const itemId = btn.id;
      const itemname = btn.getAttribute('itemname');
      displayPopup();
      await showPopup(array[itemId - 1], getComment);
      const hidePopup = document.querySelector('.close-btn');
      hidePopup.addEventListener('click', closePopup);

      const form = document.querySelector('.form');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const inputName = document.querySelector('.input-name');
        const inputComment = document.querySelector('.input-text');
        const newComment = {
          item_id: itemname,
          username: inputName.value,
          comment: inputComment.value,
        };
        await sendComment(newComment);
        await showPopup(array[itemId - 1], getComment);
        form.reset();
        const hidePopup = document.querySelector('.close-btn');
        hidePopup.addEventListener('click', closePopup);
      });
    });
  });
};

const gen = async () => {
  const list = await fetchShows();
  await displayAnime(list);
  seePopup(list);
};
gen();

itemContainer.addEventListener('click', async (e) => {
  if (e.target.className === 'fa fa-heart-o') {
    const string = e.target.id;
    const id = parseInt(string, 10);
    await postLikes(id);
    const container = e.target.parentElement.nextElementSibling;
    await updateLikes(id, container);
  }
});
