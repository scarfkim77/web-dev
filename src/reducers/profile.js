import profileJson from './data/profile.json';

const profile = (state = profileJson, action) => {
    switch (action.type) {
        case 'modify-profile':
            state.firstName = action.profileModified.firstName;
            state.lastName = action.profileModified.lastName;
            state.bio = action.profileModified.bio;
            state.location = action.profileModified.location;
            state.website = action.profileModified.website;
            state.dateOfBirth = action.profileModified.dateOfBirth;
            console.log(state)
            return(state);
        default:
            return(state);
    }
};

export default profile;