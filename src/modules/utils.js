const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UA1qh5oDK24p7rhA1W5m/likes';
const showApi = 'https://api.tvmaze.com/shows';
const logo = document.querySelector('.logo');
const itemContainer = document.querySelector('.mainContainer');

const fetchShows = async () => {
  const res = await fetch(showApi);
  const allShows = await res.json();
  return allShows;
};

export {
  fetchShows, involvementApi, logo, itemContainer, showApi,
};
