const PostItem = (post) => {
    return (`
        <li class="list-group-item bg-black border-0">
            <div class="row">
                <div class="col-1">
                    <img src="${post.avatarIcon}" class="wd-account-pic">
                </div>
                <div class="col-11">
                    <span class="fw-bolder">${post.userName}</span>
                    <i class="fas fa-check-circle fa-0.5x"></i>
                    <span class="text-secondary">@${post.handle} · ${post.time}</span>
                    <br/>
                    <span>${post.topic}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-11">
                    <div class="card wd-card-corner">
                        <img src="${post.cardImg}" class="card-img-top border-white">
                        <div class="card-body bg-black border-white">
                            <span class="card-text">${post.title}</span></br>
                            <p class="card-text text-secondary">${post.content}</p>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-3 ps-3">
                            <i class="far fa-comment" style="color: grey">   ${post.reply}</i>
                        </div>
                        <div class="col-3">
                            <i class="fas fa-retweet" style="color: grey">   ${post.retweet}</i>
                        </div>
                        <div class="col-3">
                            <i class="far fa-heart" style="color: grey">   ${post.like}</i>
                        </div>
                        <div class="col-3">
                            <i class="fas fa-external-link-alt" style="color: grey"></i>
                        </div>
                    </div>
                </div>
            </div>    
        </li>
  
  `);
};

export default PostItem;