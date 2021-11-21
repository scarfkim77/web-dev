const PROFILE_API = 'https://web-dev-node-kaiqi.herokuapp.com/api/profile';
const EDIT_API = 'https://web-dev-node-kaiqi.herokuapp.com/api/edit';

export const editProfile = (dispatch, newProfile) =>
    fetch(EDIT_API, {
        method: 'PUT',
        body: JSON.stringify(newProfile),
        headers: {
            'content-type': 'application/json',
        },
    }).then(response => response.json()).then(profile =>
        dispatch({
            type: 'fetch-profile',
            profile,
        }),
    );

export const fetchProfile = (dispatch) =>
    fetch(PROFILE_API).then(response => response.json()).then(profile =>
        dispatch({
            type: 'fetch-profile',
            profile,
        }),
    );
