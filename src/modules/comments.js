import commentsCounter from './commentsCounter.js';
import { getComment } from './involvementApi.js';

const showPopup = async (data) => {
  const response = await getComment(data.id);
  const comments = JSON.parse(response);
  const commentNum = commentsCounter(comments);
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
                                  <h3>Comments <span>(${commentNum || 0})</span></h3>
                                </div>
                                <ul class="comments-list">${comments
    .map((comment) => `<li class="comment-item">
    <span class="creation-date">${comment.creation_date}</span>
    <span class="username"> ${comment.username}:</span>
    <span class="comment-msg"> ${comment.comment}</span></li>`)
    .join('')
}                                  
                                </ul>
                              </div>
                              <div class="commentInput">
                                <h3 class="inputTitle">Add comments</h3>
                                <div class="commentsInput">
                                  <form class="form">
                                    <input class="input-name" type="text" placeholder="Your name" required>
                                    <textarea class="input-text" name="commentInput" id="insights" cols="30" rows="4" placeholder="Your insights" required></textarea>
                                    <button type="submit" class="addComment-btn clickable">Add Comment</button>
                                  </form>
                                </div>
                              </div>
                            </div>`;
};

export default showPopup;
