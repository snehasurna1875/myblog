import React, {Component} from 'react';
import  { BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import mainarea from './mainarea';
import logo from './logo.svg';
import './Nav.css';
import Mainpage from './form/blogeditor';
import App from './App';


function Nav() {
  return (
 
    <div>
     <Router>
      <ul>
      <li><Link to='/App'>Home</Link></li>
       <li><Link to='/form/blogeditor'>About</Link></li> 
       <li><Link  to='/mainarea'>SignIn</Link></li>
       <li><a href="#">SignUp</a></li>
      </ul> 
      <Switch>
         <Route exact path='/App' component={App}></Route>
       </Switch> 
      <Switch>
         <Route exact path='/form/blogeditor' component={Mainpage}></Route>
       </Switch>  
      <Switch>
       <Route exact path='/mainarea' component={mainarea}></Route>
     </Switch> 
      
     </Router>
    </div>
    
  );
}

export default Nav;
