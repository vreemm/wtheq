import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; // to add more pages
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Community from './pages/Community';
import Performance from './pages/Performance';
import keepInTouch from './pages/keepInTouch';
import Project from './pages/Project';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
       <div className="App">
        <Sidebar />
        <Switch> 
          <Route path= "/HomePage" component= {HomePage}/>
          <Route path= "/Profile" component= {Profile}/>
          <Route path= "/Community" component= {Community}/>
          <Route path= "/Performance" component= {Performance}/>
          <Route path= "/keepInTouch" component= {keepInTouch}/>
          <Route path= "/Project" component= {Project}/>
        </Switch>

       </div>
    </Router>
   
  );


};


export default App;

//Switch to change between each pages, Route the same page




