import React from 'react';

const PostItem = (posts) => {
    return (
        <>
            <li className="list-group-item bg-black border-0">
                <div className="row">
                    <div className="col-1">
                        <img src={posts.avatarIcon} className="wd-account-pic" alt=""/>
                    </div>
                    <div className="col-11">
                        <span className="fw-bolder">{posts.userName}</span>
                        <i className="fas fa-check-circle fa-0.5x"/>
                        <span
                            className="text-secondary">@{posts.handle} · {posts.time}</span>
                        <br/>
                        <span>{posts.topic}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1"/>
                    <div className="col-11">
                        <div className="card wd-card-corner">
                            <img src={posts.cardImg}
                                 className="card-img-top border-white" alt=""/>
                                <div className="card-body bg-black border-white">
                                    <span className="card-text">{posts.title}</span>
                                <br/>
                                <p className="card-text text-secondary">{posts.content}</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-3 ps-3">
                            <i className="far fa-comment wd-grey"> {posts.reply}</i>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-retweet wd-grey"> {posts.retweet}</i>
                        </div>
                        <div className="col-3">
                            <i className="far fa-heart wd-grey"> {posts.like}</i>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-external-link-alt wd-grey"/>
                        </div>
                    </div>
                </div>
            </div>
            </li>
        </>

);
};

export default PostItem;