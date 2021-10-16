import who from './who.js';
import WhoToFollowListItem from './WhoToFollowListItem.js';

const WhoToFollowList = () => {
  return (`
            <ul class="list-group">
            <!-- continue here -->
                <li class="list-group-item wd-override-right-bar-bg wd-override-text-white fw-bolder">
                    Who to follow
                </li>
                ${
      who.map(w => {
        return (WhoToFollowListItem(w));
      }).join('')
  }
            </ul>
    `);
};

export default WhoToFollowList;

