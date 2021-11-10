//import logo from './logo.svg';
import './App.css';

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './components/a6/Build/ExploreScreen/explore.css';
import './components/a6/Build/HomeScreen/home.css';
// import HomeScreen from './components/a6/Build/HomeScreen/HomeScreen';
// import ExploreScreen from './components/a6/Build/ExploreScreen/ExploreScreen'
// import HelloWorld from './components/a6/HelloWorld';
import {BrowserRouter, Route} from 'react-router-dom';
import Practice from './components/a7/Practice/index';
import Build from './components/a7/Build/index';

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                  <Practice/>
              </Route>
              <Route path="/a7/twitter">
                  <Build/>
              </Route>
          </div>
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