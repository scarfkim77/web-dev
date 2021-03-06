import React from 'react';

const PostSummaryItem = (
    {
        posts = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../images/React.png"
        }
    }
) => {
  return (
      <>
          <li className="list-group-item">
              <div className="row">
                  <div className="col-9 d-flex flex-column align-items-start m-auto">
                      <p className="wd-override-text-grey mb-0">
                          {posts.topic}
                      </p>
                      <div>
                          <span className="fw-bolder">{posts.userName}</span>
                          <i className="fas fa-check-circle fa-0.5x"/>
                          <span className="wd-override-text-grey"> · {posts.time}</span>
                      </div>
                      <span className="fw-bolder">{posts.title}</span>
                      <p className="wd-subtext mt-0">{posts.tweets}</p>
                  </div>
                  <div className="col-3 d-flex flex-wrap align-items-start m-auto">
                        <img src={posts.images} className="wd-author-img" alt=""/>
                  </div>
              </div>
          </li>
      </>
  );
};

export default PostSummaryItem;