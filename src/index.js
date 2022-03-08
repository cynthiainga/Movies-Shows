import './style.css';
import { fetchShows } from './modules/utils';
import displayAnime from './modules/display';

const gen = async () => {
    const list = await(fetchShows());
    displayAnime(list);
};
gen();
