//import logo from './logo.svg';
import './App.css';

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Practice from './components/a8/Practice/index';
import Build from './components/a8/Build/index';
import './components/a8/Build/TweetList/tweet.css';
import who from './reducers/who';
import tweets from './reducers/tweets';
import profile from './reducers/profile';
import showprofile from './reducers/showprofile';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import A9 from './a9';

const reducer = combineReducers({tweets, who, profile, showprofile});
const store = createStore(reducer);

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="container">
                    <Route path="/" exact={true}>
                        <A9/>
                    </Route>
                    <Route path="/a8/twitter">
                        <Build/>
                    </Route>
                    <Route path="/a9">
                        <A9/>
                    </Route>
                    <Route path="/a8/practice">
                        <Practice/>
                    </Route>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;