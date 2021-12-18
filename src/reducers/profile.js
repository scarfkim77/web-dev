import profileJson from './data/profile.json';

const profile = (state = profileJson, action) => {
    switch (action.type) {
        // case 'fetch-profile':
        //     return action.profile;
        case 'fetch-profile':
            state.firstName = action.newProfile.firstName;
            state.lastName = action.newProfile.lastName;
            state.bio = action.newProfile.bio;
            state.location = action.newProfile.location;
            state.website = action.newProfile.website;
            state.dateOfBirth = action.newProfile.dateOfBirth;
            console.log(state)
            return(state);
            break;
        default:
            return(state);
    }
};


export default profile;