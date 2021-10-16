const PostSummaryItem = (post) => {
  return (`
          <li class="list-group-item">
              <div class="row">
                  <div class="col-9 d-flex flex-column align-items-start m-auto">
                      <p class="wd-override-text-grey mb-0">
                          ${post.topic}
                      </p>
                      <div>
                          <span class="fw-bolder">${post.userName}</span>
                          <i class="fas fa-check-circle fa-0.5x"></i>
                          <span class="wd-override-text-grey"> · ${post.time}</span>
                      </div>
                      <span class="fw-bolder">${post.title}</span>
                      <p class="wd-subtext mt-0">${post.tweets}</p>
                  </div>
                  <div class="col-3 d-flex flex-wrap align-items-start m-auto">
                        <img src="${post.image}" class="wd-author-img">
                  </div>
              </div>
          </li>
  `);
};

export default PostSummaryItem;