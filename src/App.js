import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/Homepage';
import NowPlaying from './components/NowPlaying'
import TopRated from './components/TopRated'

const App = () => {
	return (
    <Router>
    <>
      <Switch>
        <Route exact path='/react-movie-app' component={Homepage} />
        <Route exact path='./components/NowPlaying.js' component={NowPlaying} />
        <Route exact path='./components/TopRated.js'component={TopRated} />
      </Switch>
    </>
  </Router>
	);
};

export default App;
