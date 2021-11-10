import React from 'react';
import WhoToFollowListItem from './WhoToFollowListItem';
import {useSelector} from 'react-redux';

const WhoToFollowList = () => {
    const who = useSelector((state) => state);
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

