import NavigationSidebar from '../NavigationSidebar/index.js';
import HomeComponent from "./HomeComponent.js";
import WhoToFollowList from '../WhoToFollowList/index.js';

(function($) {
  $('#wd-home').append(`
        <div class="row mt-2 ms-2">
        <div class="col-2 col-md-2 col-lg-2 col-xl-2">
            ${NavigationSidebar('home')}
        </div>
        <div class="col-10 col-lg-6 col-xl-6">
            ${HomeComponent()}
        </div>
        <div class="d-none d-lg-block col-lg-4 col-xl-4">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);
