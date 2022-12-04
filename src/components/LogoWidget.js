import React from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";


const LogoWidget = () => {
    return(
        <div className="divLogo">
            <Link to={process.env.PUBLIC_URL + "/"} className="linkLogo"><button className="btnLogo"><img src={logo} className="App-logo col-3" alt="logo"></img></button></Link>
        </div>
    )
}

export default LogoWidget