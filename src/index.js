import './style.css';
import { fetchShows } from './modules/utils.js';
import displayAnime from './modules/display.js';
import { closePopup, displayPopup } from './modules/controlls.js';
import showPopup from './modules/comments.js';

const seePopup = async () => {
  const commentBtn = document.querySelectorAll('.comment-btn');
  const animes = await fetchShows();
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const itemId = btn.parentNode.parentNode.dataset.id;
      displayPopup();
      animes.find((anime) => anime.id === itemId);
      showPopup(animes.find((anime) => anime.id === itemId));
      const hidePopup = document.querySelector('.close-btn');
      hidePopup.addEventListener('click', closePopup);
    });
  });
};

const gen = async () => {
  const list = await fetchShows();
  displayAnime(list);
  seePopup();
};
gen();
