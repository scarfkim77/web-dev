const NavigationSidebar = (active) => {
    if (active === 'home') {
        return (`
            <div class="list-group">
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fab fa-twitter"></i>
                    <span class="d-none d-xl-inline">
                
                    </span>
                </a>
            <!-- continue the rest of the list -->
                <a class="list-group-item list-group-item-action active" href="../HomeScreen/home.html">
                    <i class="fas fa-home"></i>
                    <span class="d-none d-xl-inline">
                    Home
                    </span>
                </a>

                <a class="list-group-item list-group-item-action" href="../ExploreScreen/explore.html">
                    <i class="fas fa-hashtag"></i>
                    <span class="d-none d-xl-inline">
                        Explore
                    </span>    
                </a>
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fas fa-bell"></i>
                    <span class="d-none d-xl-inline">
                        Notifications
                    </span> 
                </a>
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fas fa-envelope"></i>
                    <span class="d-none d-xl-inline">
                        Messages
                    </span> 
                </a>
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fas fa-bookmark"></i>
                    <span class="d-none d-xl-inline">
                        Bookmarks
                    </span> 
                </a>
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fas fa-list-ul"></i>
                    <span class="d-none d-xl-inline">
                        Lists
                    </span>
                </a>
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fas fa-user"></i>
                    <span class="d-none d-xl-inline">
                        Profile
                    </span>
                </a>
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fas fa-comment-dots"></i>
                    <span class="d-none d-xl-inline">
                        More
                    </span>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
    } else if (active === 'explore') {
        return (`
            <div class="list-group">
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fab fa-twitter"></i>
                    <span class="d-none d-xl-inline">
                
                    </span>
                </a>
            <!-- continue the rest of the list -->
                <a class="list-group-item list-group-item-action" href="../HomeScreen/home.html">
                    <i class="fas fa-home"></i>
                    <span class="d-none d-xl-inline">
                    Home
                    </span>
                </a>
                <a class="list-group-item list-group-item-action active" href="../ExploreScreen/explore.html">
                    <i class="fas fa-hashtag"></i>
                    <span class="d-none d-xl-inline">
                        Explore
                    </span>    
                </a>
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fas fa-bell"></i>
                    <span class="d-none d-xl-inline">
                        Notifications
                    </span> 
                </a>
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fas fa-envelope"></i>
                    <span class="d-none d-xl-inline">
                        Messages
                    </span> 
                </a>
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fas fa-bookmark"></i>
                    <span class="d-none d-xl-inline">
                        Bookmarks
                    </span> 
                </a>
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fas fa-list-ul"></i>
                    <span class="d-none d-xl-inline">
                        Lists
                    </span>
                </a>
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fas fa-user"></i>
                    <span class="d-none d-xl-inline">
                        Profile
                    </span>
                </a>
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fas fa-comment-dots"></i>
                    <span class="d-none d-xl-inline">
                        More
                    </span>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
    }

};
export default NavigationSidebar;
