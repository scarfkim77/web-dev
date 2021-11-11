import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import './editprofile.css';

const EditProfile = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    let [firstName, setFirstName] = useState(profile.firstName);
    let [lastName, setLastName] = useState(profile.lastName);
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [website, setWebsite] = useState(profile.website);
    let [birth, setBirth] = useState(profile.dateOfBirth);
    const saveHandler = () => {
        dispatch({
            type: 'modify-profile',
            profileModified: {
                firstName: firstName,
                lastName: lastName,
                bio: bio,
                location: location,
                website: website,
                dateOfBirth: birth,
            },
        });
    };
    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <Link to="/a7/twitter/profile">
                        <i className="fas fa-times"
                           style={{color: 'white'}}/>
                    </Link>
                </div>
                <div className="col-11">
                    <span className="wd-profile-name">Edit Profile</span>
                    <Link to="/a7/twitter/profile">
                        <button onClick={saveHandler}
                                className="btn btn-light fa-pull-right rounded-pill">
                            Save
                        </button>
                    </Link>
                </div>
            </div>
            <img src={profile.bannerPicture}
                 className="mt-2"
                 style={{width: '100%', height: '20%'}} alt=""/>
            <img src={profile.profilePicture}
                 className="wd-profilePicture" alt=""/>
            <div className="mb-4 p-2 border border-secondary rounded-1">
                <label style={{color: '#6c757d'}}>First Name</label>
                <div>
                    <input className="wd-editprofile-input" value={firstName}
                           onChange={(event) =>
                               setFirstName(event.target.value)}
                    />
                </div>
            </div>
            <div className="mb-4 p-2 border border-secondary rounded-1">
                <label style={{color: '#6c757d'}}>Last Name</label>
                <div>
                    <input className="wd-editprofile-input" value={lastName}
                           onChange={(event) =>
                               setLastName(event.target.value)}/>
                </div>
            </div>
            <div className="mb-4 p-2 border border-secondary rounded-1">
                <label style={{color: '#6c757d'}}>Bio</label>
                <div>
                    <textarea className="wd-editprofile-input" value={bio}
                              onChange={(event) =>
                                  setBio(event.target.value)}/>
                </div>
            </div>
            <div className="mb-4 p-2 border border-secondary rounded-1">
                <label style={{color: '#6c757d'}}>Location</label>
                <div>
                    <input className="wd-editprofile-input" value={location}
                           onChange={(event) =>
                               setLocation(event.target.value)}/>
                </div>
            </div>
            <div className="mb-4 p-2 border border-secondary rounded-1">
                <label style={{color: '#6c757d'}}>Website</label>
                <div>
                    <input className="wd-editprofile-input" value={website}
                           onChange={(event) =>
                               setWebsite(event.target.value)}/>
                </div>
            </div>
            <div className="mb-4 p-2 border border-secondary rounded-1">
                <label style={{color: '#6c757d'}}>Birth date</label>
                <div>
                    <input className="wd-editprofile-input" value={birth}
                           onChange={(event) =>
                               setBirth(event.target.value)}/>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;