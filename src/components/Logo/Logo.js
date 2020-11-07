import React from "react";
import Tilt from 'react-parallax-tilt';
import robo from "./robo.png"
import "./Logo.css"

const Logo=()=>{
    return(
        <div className= "ma4 mt0">
         <Tilt className="parallax-effect" perspective={0}>
            <div>
             <img id='logo' style={{paddingTop:'5px'}} alt="logo" src={robo} />
             </div>
         </Tilt>

        
        </div>

    );
}

export default Logo;