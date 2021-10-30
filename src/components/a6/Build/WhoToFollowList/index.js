import React from 'react';
import who from './who.json';
import WhoToFollowListItem from './WhoToFollowListItem';

const WhoToFollowList = () => {
    return (
            <ul className="list-group">
                <li className="list-group-item wd-override-right-bar-bg wd-override-text-white fw-bolder">
                    Who to follow
                </li>
                {
                    who.map(who => {
                        return (<WhoToFollowListItem who={who}/>);
                    })
                }
            </ul>
    );
};

export default WhoToFollowList;

