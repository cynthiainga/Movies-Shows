import { updateLikes, countShowList } from './likes.js';

const displayAnime = (anime) => {
  anime.forEach((e, index) => {
    const myList = document.querySelector('.mainContainer');
    if (index < 8) {
      myList.innerHTML += `
            <div class="allMovies">
              <ul class="movieImages">
                <img class="sMovie" src="${e.image.medium}" alt="Movie-pic">
              </ul>
              <div class="movieTitle">
                
                <div class="activity">
                  <h3>${e.name}</h3>
                  <div class="like-container">
                    <span>
                      <span><i id="${e.id}" class="fa fa-heart-o"></i></span>
                      <input type="number" id="${e.id}" class="countLikes" value="" name=""
                      <span id="${e.id}">Likes</span>
                    </span>
                  </div>
                </div> 
                <div class="commentBtn">
                  <button class="comment-btn" id="${e.id}" itemname="${e.name}">Comments</button>
                </div>
              </div>
            </div>
            `;
    }
  });

  countShowList();

  const count = document.querySelectorAll('.countLikes');
  count.forEach((e, index) => {
    const countLike = index + 1;
    updateLikes(countLike, e);
  });
};

export default displayAnime;