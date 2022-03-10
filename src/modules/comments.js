const showPopup = (data) => {
  const movieName = data.name;
  const movieImage = data.image.medium;
  const movieSummary = data.summary;
  const commentPopup = document.querySelector('#popup');
  commentPopup.className = 'comment-popup';
  commentPopup.innerHTML = `<div class="shows">
                              <button type="button" class="close-btn clickable">&times;</button>
                              <div class="shows-image">
                                <img src="${movieImage}" alt="show-image">
                              </div>
                              <div class="shows-text">
                                <div class="shows-title">
                                  <h2>${movieName}</h2>
                                </div>
                                <div class="details">
                                  <p>${movieSummary}</p>
                                </div>
                              </div>
                              <div class="comments">
                                <div class="comment-title">
                                  <h3>Comments <span class="count">(2)</span></h3>
                                </div>
                                <ul class="comments-list">
                                  <li class="comments-item"><span>09/03/2022</span><span> Cyndi:</span><span> This movie is amazing</span></li>
                                  <li class="comments-item"><span>09/03/2022</span><span> Esthy:</span><span> This movie is amazing I would like to watch it again</span></li>
                                </ul>
                              </div>
                              <div class="commentInput">
                                <h3 class="inputTitle">Add comments</h3>
                                <div class="commentsInput">
                                  <form class="form">
                                    <input class="input-name" type="text" placeholder="Your name" required>
                                    <textarea name="commentInput" id="insights" cols="30" rows="4" placeholder="Your insights" required></textarea>
                                    <button type="submit" class="addComment-btn clickable">Comments</button>
                                  </form>
                                </div>
                              </div>
                            </div>`;
};

export default showPopup;
