import React from 'react';
import NavigationSidebar from '../NavigationSideBar';
import ExploreComponent from './ExploreComponent';
import WhoToFollowList from '../WhoToFollowList';

const ExploreScreen = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{'position': 'relative'}}>
                <ExploreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>

    );
};

export default ExploreScreen;

// (function($) {
//     $('#wd-explore').append(`
//         <div class="row mt-2 ms-2">
//         <div class="col-2 col-md-2 col-lg-2 col-xl-2">
//             <NavigationSidebar active="home"/>
//         </div>
//         <div class="col-10 col-lg-6 col-xl-6">
//             <ExploreComponent/>
//         </div>
//         <div class="d-none d-lg-block col-lg-4 col-xl-4">
//             <WhoToFollowList/>
//         </div>
//         </div>
//     `);
// })($);
