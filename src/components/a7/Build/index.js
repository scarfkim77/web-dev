import React from 'react';
import ExploreScreen from './ExploreScreen/ExploreScreen';
import HomeScreen from './HomeScreen/HomeScreen';
import {Route} from 'react-router-dom';
import who from '../../../reducers/who';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(who);

const Build = () => {
    return (
        <Provider store={store}>
            <div>
                <Route path={["/", "/a7/twitter/home"]}
                       exact={true} component={HomeScreen}/>
                <Route path="/a7/twitter/explore"
                       exact={true} component={ExploreScreen}/>
            </div>
        </Provider>
    );
};

export default Build;

