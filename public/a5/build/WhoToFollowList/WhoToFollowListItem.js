const WhoToFollowListItem = (who) => {
  return (`
    <li class="list-group-item">
        <div class="row">
            <div class="col-2 d-flex flex-wrap align-items-start">
                <img src="${who.avatarIcon}" class="wd-account-pic">
            </div>
            <div class="col-7 d-flex flex-wrap align-items-start">
                <div class="ms-3 my-1">
                    <span class="fw-bolder wd-override-text-white">${who.userName}</span>
                    <i class="fas fa-check-circle fa-0.5x fa-inverse"></i>
                    <br/>
                    <span class="wd-override-text-white">@${who.handle}</span>
                </div>
            </div>
            <div class="col-3 d-flex flex-wrap align-items-center">
                <button type="button"
                    class="btn btn-primary rounded-pill me-3">
                    Follow
                </button>
            </div>
        </div>
</li>
  `);
};

export default WhoToFollowListItem;