import React, {Component} from 'react';
import  { BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import mainarea from './mainarea';
import logo from './logo.svg';
import './Nav.css';
import Mainpage from './form/blogdisplay';


function Nav() {
  return (
 
    <div>
     <Router>
      <ul>
       <li><Link to='/form/blogdisplay'>Home</Link></li> 
       <li><a>About</a></li>
       <li><Link  to='/mainarea'>SignIn</Link></li>
       <li><a href="#">SignUp</a></li>
      </ul> 
      <Switch>
         <Route exact path='/form/blogdisplay' component={Mainpage}></Route>
       </Switch>  
      <Switch>
       <Route exact path='/mainarea' component={mainarea}></Route>
     </Switch> 
      
     </Router>
    </div>
    
  );
}

export default Nav;
