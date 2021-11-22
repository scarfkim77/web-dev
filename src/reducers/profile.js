import profileJson from './data/profile.json';

const profile = (state = profileJson, action) => {
    switch (action.type) {
        case 'fetch-profile':
            return action.profile;
        default:
            return(state);
    }
};


export default profile;