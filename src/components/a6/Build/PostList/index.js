import posts from './posts.json';
import PostItem from './PostItem';
import React from 'react';

const PostList = () => {
    return (
        <>
            <ul className="list-group">
                {
                    posts.map(posts => {
                        return (<PostItem posts={posts}/>);
                    })
                }
            </ul>
        </>
    );
};

export default PostList;