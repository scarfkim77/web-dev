import posts from './data/tweets.json';

const tweets = (state = posts, action) => {
    switch (action.type) {
        case 'delete-tweet':
            return state.tweets.filter(tweet => tweet._id !== action.tweet._id);
        case 'create-tweet':
            const tweet = {
                _id: (new Date()).getTime() + '',
                'topic': 'Web Development',
                'userName': 'ReactJS',
                'verified': false,
                'handle': 'ReactJS',
                'time': '2h',
                ...action.tweet,
                'avatar-image': '../../../images/react-blue.png',
                'logo-image': '../../../images/react-blue.png',
                'stats': {
                    'comments': 123,
                    'retweets': 234,
                    'likes': 345,
                },
            };
            return ([
                    tweet,
                    ...state.tweets,
                ]
            );
        case 'fetch-all-tweets.json':
            return ({
                tweets: action.tweets,
            });
        case 'like-tweet':
            return (
                state.map(tweet => {
                    if (tweet._id === action.tweet._id) {
                        if (tweet.liked === true) {
                            tweet.liked = false;
                            tweet.stats.likes--;
                        } else {
                            tweet.liked = true;
                            tweet.stats.likes++;
                        }
                    }
                    return tweet;
                })
            );
        default:
            return (state);
    }
};

export default tweets;