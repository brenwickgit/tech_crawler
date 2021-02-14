import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Fragment } from 'react';

// Pages
import Landing from './pages/Landing';
import Results from './pages/Results';



function App() {
  return (
    <Router>
      <Fragment>
      <div className="container">
        <Route exact path='/' component={Landing}/>
        <Switch>
          <Route exact path='/results:query' component={Results}/>
        </Switch>
      </div>
      </Fragment>
    </Router>
  );
}

export default App;
