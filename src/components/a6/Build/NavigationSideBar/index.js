import React from 'react';

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <>
            <div className="list-group">
                <a className="list-group-item list-group-item-action" href="/">
                    <i className="fab fa-twitter"></i>
                    <span className="d-none d-xl-inline">
                
                    </span>
                </a>
                <a className={`list-group-item list-group-item-action
                    ${active === 'home' ? 'active' : ''}`}
                    href="../HomeScreen/home.html">
                    <i className="fas fa-home"></i>
                    <span className="d-none d-xl-inline">
                    Home
                    </span>
                </a>

                <a className={`list-group-item list-group-item-action
                    ${active === 'explore' ? 'active' : ''}`}
                    href="../ExploreScreen/explore.html">
                        <i className="fas fa-hashtag"></i>
                        <span className="d-none d-xl-inline">
                            Explore
                        </span>    
                </a>
                <a className="list-group-item list-group-item-action" href="/">
                    <i className="fas fa-bell"></i>
                    <span className="d-none d-xl-inline">
                        Notifications
                    </span> 
                </a>
                <a className="list-group-item list-group-item-action" href="/">
                    <i className="fas fa-envelope"></i>
                    <span className="d-none d-xl-inline">
                        Messages
                    </span> 
                </a>
                <a className="list-group-item list-group-item-action" href="/">
                    <i className="fas fa-bookmark"></i>
                    <span className="d-none d-xl-inline">
                        Bookmarks
                    </span> 
                </a>
                <a className="list-group-item list-group-item-action" href="/">
                    <i className="fas fa-list-ul"></i>
                    <span className="d-none d-xl-inline">
                        Lists
                    </span>
                </a>
                <a className="list-group-item list-group-item-action" href="/">
                    <i className="fas fa-user"></i>
                    <span className="d-none d-xl-inline">
                        Profile
                    </span>
                </a>
                <a className="list-group-item list-group-item-action" href="/">
                    <i className="fas fa-comment-dots"></i>
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
