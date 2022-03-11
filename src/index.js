import './style.css';
import { fetchShows, itemContainer } from './modules/utils.js';
import displayAnime from './modules/display.js';
import { closePopup, displayPopup } from './modules/controlls.js';
import showPopup from './modules/comments.js';
import { postLikes, updateLikes } from './modules/likes.js';
import { sendComment, getComment } from './modules/involvementApi.js';

const seePopup = (array) => {
  const commentBtn = document.querySelectorAll('.comment-btn');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const itemId = btn.id;
      displayPopup();
      showPopup(array[itemId - 1]);
      const hidePopup = document.querySelector('.close-btn');
      hidePopup.addEventListener('click', closePopup);

      const form = document.querySelector('.form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputName = document.querySelector('.input-name');
        const inputComment = document.querySelector('.input-text');
        const newComment = {
          item_id: itemId,
          username: inputName.value,
          comment: inputComment.value,
        };
        sendComment(newComment);
        getComment(itemId);
        form.reset();
      });
    });
  });
};

const gen = async () => {
  const list = await fetchShows();
  displayAnime(list);
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
