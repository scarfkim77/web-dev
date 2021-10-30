import NavigationSidebar from '../NavigationSideBar/index';
import HomeComponent from "./HomeComponent";
import WhoToFollowList from '../WhoToFollowList/index';
import React from 'react';

const HomeScreen = () => {
    return (
        <div className="row mt-2 ms-2">
            <div className="col-2 col-md-2 col-lg-2 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-lg-6 col-xl-6">
                <HomeComponent/>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
};

export default HomeScreen;

// (function($) {
//   $('#wd-home').append(`
//         <div class="row mt-2 ms-2">
//         <div class="col-2 col-md-2 col-lg-2 col-xl-2">
//             ${NavigationSidebar('home')}
//         </div>
//         <div class="col-10 col-lg-6 col-xl-6">
//             ${HomeComponent()}
//         </div>
//         <div class="d-none d-lg-block col-lg-4 col-xl-4">
//             ${WhoToFollowList()}
//         </div>
//         </div>
//     `);
// })($);
