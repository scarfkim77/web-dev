const EDIT_API = 'http://localhost:4000/api/profile';

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