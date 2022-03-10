import './style.css';
import { fetchShows, logo } from './modules/utils.js';
import displayAnime from './modules/display.js';


const gen = async () => {
  const list = await fetchShows();
  displayAnime(list);
  seePopup(list);
};
gen();
