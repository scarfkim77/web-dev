import React from 'react';
import {Link} from 'react-router-dom';
import Classes from './Classes';
import Styles from './Styles';
import ConditionalOutput from './ConditionalOutput';
import TodoList from './Todo/TodoList';

const Practice = () => {
    return (
        <div>
            <h1>Practice</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/twitter/home">
                Build
            </Link>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    );
};

export default Practice;