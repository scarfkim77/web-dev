const WHOS_API = 'http://localhost:4000/api/who';
const TWEET_API = 'http://localhost:4000/api/tweets';
const PROFILE_API = 'http://localhost:4000/api/profile';
const EDIT_API = 'http://localhost:4000/api/edit';

export const fetchProfile = (dispatch) =>
    fetch(PROFILE_API).then(response => response.json()).then(profile =>
        dispatch({
            type: 'fetch-profile',
            profile,
        }),
    );

export const fetchAllTweets = (dispatch) =>
    fetch(TWEET_API).then(response => response.json()).then(tweets =>
        dispatch({
            type: 'fetch-all-tweets',
            tweets,
        }),
    );

export const fetchWhos = (dispatch) =>
    fetch(WHOS_API).then(response => response.json()).then(whos =>
        dispatch({
            type: 'fetch-whos',
            whos,
        }),
    );

export const postNewTweet = (dispatch, newTweet) =>
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json',
        },
    }).then(response => response.json()).then(tweet =>
        dispatch({
            type: 'create-tweet2',
            tweet,
        }),
    );

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

export const deleteTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}`, {
        method: 'DELETE',
    }).then(response => dispatch({
        type: 'delete-tweet',
        tweet,
    }));

export const likeTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}/like`, {
        method: 'PUT',
    }).then(response =>
        dispatch({
            type: 'like-tweet',
            tweet,
        }));