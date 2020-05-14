import React  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from './Navbar';
import About from '../pages/About';
import Home from '../pages/Home';
import Works from '../pages/Works';
import StudyCase from './StudyCase';

const RouterCustom = () => {
    return (
        <>
            <Router>
              <div>
                <Navbar />
                 <Switch>
                    <Route exact path={`/`}>
                      <Home />
                    </Route>
                    <Route path={`/about`}>
                      <About />
                    </Route>
                    <Route path={`/works`}>
                      <Works />
                    </Route>
                  </Switch>
                  <Switch>
                    <Route path={`/works/:studyCase`}>
                      <StudyCase />
                    </Route>
                  </Switch>
              </div>
            </Router>
        </>
        );
};

export default RouterCustom;