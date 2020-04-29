import React, {Component} from "react";
import './blogdisplay.css';
import jio from './blogi';

function Mainpage() {
    return(
        
<div className="blogdisplay">

    <div className="blogdispay-centerbox">
    <form action="" >
    <div className="heading">
       <label>Title</label>
    </div>
    <div>
        <input type="text" className="inputtext" required />
    </div>
    <div className="heading">
       <label>Content</label>
    </div>
    <div>
        <textarea  className="inputtext1" required />
    </div>
    <div className="button1">
        <input type="submit" value="Submit" />
    </div>
   </form>
   


    </div>
3

</div>

    );
    
    
}

export default Mainpage;