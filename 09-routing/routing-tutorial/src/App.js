import React, {Suspense} from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';

const Lazy = React.lazy(() => import('./components/Settings'));


// const LazyLoadSettings = (
// );

// /
// /about => /about/foo/bar
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/about/stam" >About</Link>
            </li>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/settings" >Settings</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/:myName" component={About} />
          <Route path="/settings" render={() => {
            return (
              <Suspense fallback={<div>Loading...</div>}>
                <div>
                  <Lazy />
                </div>
              </Suspense>
            );
          }} />
          <Route path="**" component={Error404} />
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
