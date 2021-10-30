import React from 'react';

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../images/NASA.png',
            userName: 'NASA',
            handle: 'NASA',
        },
    },
) => {
    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2 d-flex flex-wrap align-items-start">
                        <img src={who.avatarIcon} className="wd-account-pic"
                             alt=""/>
                    </div>
                    <div className="col-7 d-flex flex-wrap align-items-start">
                        <div className="ms-3 my-1">
                            <span
                                className="fw-bolder wd-override-text-white">{who.userName}</span>
                            <i className="fas fa-check-circle fa-0.5x fa-inverse"></i>
                            <br/>
                            <span
                                className="wd-override-text-white">@{who.handle}</span>
                        </div>
                    </div>
                    <div className="col-3 d-flex flex-wrap align-items-center">
                        <button type="button"
                                className="btn btn-primary rounded-pill me-3">
                            Follow
                        </button>
                    </div>
                </div>
            </li>
        </>
    );
};

export default WhoToFollowListItem;