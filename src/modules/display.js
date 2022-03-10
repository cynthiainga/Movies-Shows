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
                  <span><i id="${e.id}" class="fa fa-heart-o"></i></span>
                  <span id="${e.id}">Likes</span>
                </div> 
                <div class="commentBtn">
                  <button class="comment-btn" id="${e.id}">Comments</button>
                </div>
              </div>
            </div>
            `;
    }
  });
};

export default displayAnime;