import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './profile.css';
import {fetchProfile} from '../../services/twitterService';

const Profile = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    useEffect(
        // eslint-disable-next-line react-hooks/exhaustive-deps
        () => {fetchProfile(dispatch).then(response => response.json());}, []);
    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-arrow-left" style={{color: 'white'}}/>
                </div>
                <div className="col-11">
                    <p className="wd-profile-name mb-3">{profile.firstName} {profile.lastName}</p>
                    <p className="mb-3">{profile.tweetsNum} Tweets</p>
                </div>
            </div>
            <img src={profile.bannerPicture}
                 className="mt-2"
                 style={{width: '100%', height: '20%'}} alt=""/>
            <img src={profile.profilePicture}
                 className="ms-0 mt-3 wd-profilePicture" alt=""/>
            <Link to="/a9/twitter/editprofile">
                <button
                    className="mt-3 btn btn-light fa-pull-right rounded-pill">
                    Edit Profile
                </button>
            </Link>
            <p className="wd-profile-name">{profile.firstName} {profile.lastName}</p>
            <p className="mb-3">@{profile.handle}</p>
            <p className="wd-text">{profile.bio}</p>
            <div>
                <i className="fas fa-map-marker-alt me-2"/>
                <span className="me-4">{profile.location}</span>
                <i className="fas fa-birthday-cake me-2"/>
                <span className="me-4">Born {profile.dateOfBirth}</span>
                <i className="fas fa-calendar-alt me-2"/>
                <span className="me-4">Joined {profile.dateJoined}</span>
            </div>
            <div className="mt-2">
                <span style={{
                    color: 'white',
                    fontWeight: 'bold',
                }}>{profile.followingCount}</span>
                <span className="me-4"> Following</span>
                <span style={{
                    color: 'white',
                    fontWeight: 'bold',
                }}>Born {profile.followersCount}</span>
                <span className="me-4"> Following</span>
            </div>
        </div>
    );
};
export default Profile;