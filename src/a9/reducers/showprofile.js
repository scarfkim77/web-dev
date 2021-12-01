import showprofileJson from './data/showprofile.json';

const showprofile = (state = showprofileJson, action) => {
    switch (action.type) {
        case 'show-edit-profile':
            state.showProfile = false;
            return (state);
        default:
            return (state);
    }
};

export default showprofile;