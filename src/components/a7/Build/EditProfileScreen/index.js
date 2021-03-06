import React from 'react';
import NavigationSidebar from '../NavigationSideBar';
import PostSummaryList from '../PostSummaryList';
import EditProfile from '../EditProfile';

const EditProfileScreen = () => {
    return (
        <div>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="Profile"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{'position': 'relative'}}>
                    <EditProfile/>
                </div>
                <div
                    className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <PostSummaryList title="What's happening"/>
                </div>
            </div>
        </div>
    );
};
export default EditProfileScreen;