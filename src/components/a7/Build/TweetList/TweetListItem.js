import React from 'react';

const TweetListItem = (
    {
        posts = {
            "avatarIcon": "/images/Java.png",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "topic": "Amazing show about @Inspiration4x mission!",
            "cardImg": "/images/post1.jpg",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official site",
            "content": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
            "reply": "4.2k",
            "retweet": "3.5k",
            "like": "37.5k"
        }
    }
) => {
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

export default TweetListItem;