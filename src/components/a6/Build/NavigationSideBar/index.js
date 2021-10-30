import React from 'react';
import {Link} from 'react-router-dom';

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <>
            <div className="list-group">
                <Link to="/a6/"
                      className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </Link>
                {/*<a className="list-group-item list-group-item-action" href="/">*/}
                {/*    <i className="fab fa-twitter"/>*/}
                {/*    <span className="d-none d-xl-inline">*/}
                
                {/*    </span>*/}
                {/*</a>*/}
                <Link to="/a6/twitter/home"
                      className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home"/>
                    <span className="d-none d-xl-inline">Home</span>
                </Link>

                <Link to="/a6/twitter/explore"
                      className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag"></i>
                    <span className="d-none d-xl-inline">Explore</span>
                </Link>

                <a className="list-group-item list-group-item-action" href="/">
                    <i className="fas fa-bell"/>
                    <span className="d-none d-xl-inline">
                        Notifications
                    </span> 
                </a>
                <a className="list-group-item list-group-item-action" href="/">
                    <i className="fas fa-envelope"/>
                    <span className="d-none d-xl-inline">
                        Messages
                    </span> 
                </a>
                <a className="list-group-item list-group-item-action" href="/">
                    <i className="fas fa-bookmark"/>
                    <span className="d-none d-xl-inline">
                        Bookmarks
                    </span> 
                </a>
                <a className="list-group-item list-group-item-action" href="/">
                    <i className="fas fa-list-ul"/>
                    <span className="d-none d-xl-inline">
                        Lists
                    </span>
                </a>
                <a className="list-group-item list-group-item-action" href="/">
                    <i className="fas fa-user"/>
                    <span className="d-none d-xl-inline">
                        Profile
                    </span>
                </a>
                <a className="list-group-item list-group-item-action" href="/">
                    <i className="fas fa-comment-dots"/>
                    <span className="d-none d-xl-inline">
                        More
                    </span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );

};
export default NavigationSidebar;
