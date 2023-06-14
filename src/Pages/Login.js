import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Login()
{
    return<>
        <Header/>
        <div className="login-container">  
            <div>   
                <input className="login-input" type="text" placeholder="Email or Mobile no"></input>
            </div>    
            <div>    
                <input className="login-input" type="password" placeholder="Enter Password"></input>
            </div>
            
            <div>
                <button className="login-btn" type="button" >Login</button>
            </div>
            <div>
                <p>New User, <Link to="/register">Register Here</Link> </p>
            </div>

        </div>
        <Footer/>
    </>
};