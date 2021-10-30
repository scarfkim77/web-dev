import PostSummaryList from '../PostSummaryList/index';
import React from 'react';

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-11">
                    <div className="input-group border-0">
                      <span
                          className="input-group-text bg-white wd-rounded-search-box-left">
                          <i className="fas fa-search fa-inverse wd-icon-grey"/>
                      </span>
                        <input type="text" placeholder="Search Twitter"
                               className="form-control wd-rounded-search-box-right"/>
                    </div>
                </div>
                <div className="col-1">
                    <i className="fas fa-cog mt-1 wd-icon-blue wd-icon-magnify"/>
                </div>
            </div>

            <ul className="nav nav-tabs my-2 border-0">
                <li className="navbar-dark nav-item">
                    <a className="nav-link wd-override-text-grey active"
                       href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link wd-override-text-grey"
                       href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link wd-override-text-grey"
                       href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link wd-override-text-grey"
                       href="sports.html">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link wd-override-text-grey"
                       href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            {/*<img src="../../../../../public/a5/build/images/Starship.jpg" className="card-img mb-2" alt=""/>*/}
            <img src="../images/Starship.jpg" className="card-img mb-2" alt=""/>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;
