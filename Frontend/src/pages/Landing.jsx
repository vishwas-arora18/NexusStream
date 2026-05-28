import React from 'react';
import "../App.css"
import {Link} from 'react-router-dom'
export default function LandingPage(){
    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Nexus Stream</h2>
                </div>
                <div className='navList'>
                    <p>Join as Guest</p>
                    <p>Register</p>
                    <div role="button">
                        <p>Login</p>
                    </div>
                </div>
            </nav>
            <div className="landingMainContainer">
                <div>
                    <h1><span>Connect</span> with your loved Ones</h1>
                    <p>Cover a distance by Nexus Stream</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div role='button'>
                <img src="/mobile-img (3) (1).png" alt="Nexus Stream Video Call"/>
                </div>
            </div>
            </div>
    )
}
