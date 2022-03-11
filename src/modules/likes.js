import { involvementApi } from './utils.js';

export const fetchLikes = async () => {
  const res = await fetch(involvementApi);
  const likes = await res.json();
  return likes;
};

export const postLikes = async (id) => {
  const res = await fetch(involvementApi, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  return res;
};

export const updateLikes = async (id, display) => {
  const res = await fetch(involvementApi);
  const saveLikes = await res.json();
  saveLikes.forEach((show) => {
    if (show.item_id === id) {
      display.value = `${show.likes}`;
    }
  });
};

export function countShows() {
  const showContainer = document.querySelector('.mainContainer');
  const number = showContainer.childElementCount;
  return number;
}

export const countShowList = () => {
  const showContainer = document.querySelector('.mainContainer');
  const showsList = document.querySelector('.num');
  const child = showContainer.childElementCount;
  showsList.textContent = `${countShows()}`;
  return child;
};