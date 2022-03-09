import './style.css';
import { fetchShows } from './modules/utils.js';
import displayAnime from './modules/display.js';
import { closePopup, displayPopup } from './modules/controlls.js';
import showPopup from './modules/comments.js';

const seePopup = (array) => {
  const commentBtn = document.querySelectorAll('.comment-btn');

  commentBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const itemId = btn.id;
      displayPopup();
      showPopup(array[itemId - 1]);
      const hidePopup = document.querySelector('.close-btn');
      hidePopup.addEventListener('click', closePopup);
    });
  });
};

const gen = async () => {
  const list = await fetchShows();
  displayAnime(list);
  seePopup(list);
};
gen();
