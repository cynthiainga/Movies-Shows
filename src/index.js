import './style.css';
import { fetchShows, logo } from './modules/utils.js';
import displayAnime from './modules/display.js';
import myLogo from './images/logo.png';

logo.innerHTML = `<a href='#'><img class='myLogo' src='${myLogo}' alt='logo'></a>`;

const gen = async () => {
  const list = await (fetchShows());
  displayAnime(list);
};
gen();
