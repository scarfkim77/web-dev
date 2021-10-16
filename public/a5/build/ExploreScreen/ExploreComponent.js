import PostSummaryList from '../PostSummaryList/index.js';

const ExploreComponent = () => {
  return (`
            <div class="row">
                       <!-- search field and cog -->
                <div class="col-11">
                  <div class="input-group border-0">
                      <span class="input-group-text bg-white wd-rounded-search-box-left">
                          <i class="fas fa-search fa-inverse" style="color: grey"></i>
                      </span>
                      <input type="text" placeholder="Search Twitter"
                      class="form-control wd-rounded-search-box-right"/>
                  </div>
                </div>
                <div class="col-1">
                    <i style="font-size: 1.5em; color: #0d6efd" class="fas fa-cog mt-1"></i>
                </div>
           </div>
           
           <ul class="nav nav-tabs my-2 border-0">
                      <!-- tabs -->
               <li class="navbar-dark nav-item">
                    <a class="nav-link wd-override-text-grey active" href="for-you.html">For you</a>
               </li>
               <li class="nav-item">
                    <a class="nav-link wd-override-text-grey" href="trending.html">Trending</a>
               </li>
               <li class="nav-item">
                    <a class="nav-link wd-override-text-grey" href="news.html">News</a>
               </li>
               <li class="nav-item">
                    <a class="nav-link wd-override-text-grey" href="entertainment.html">Sports</a>
               </li>
               <li class="nav-item">
                    <a class="nav-link wd-override-text-grey" href="#">Entertainment</a>
               </li>
           </ul>
           <!-- image with overlaid text -->
           <img src="../images/Starship.jpg" class="card-img mb-2">
           ${PostSummaryList()}
    `);
};
export default ExploreComponent;
