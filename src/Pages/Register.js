import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Register()
{
    return<>
        <Header/>
        <div className="register-container">
            <div>
                <input className="register-input" type="text" placeholder="Enter your Name"></input>
            </div>    
            <div>   
                <input className="register-input" type="number" placeholder="Enter your Mobile No"></input>
            </div>    
            <div>    
                <input className="register-input" type="email" placeholder="Enter your Email id"></input>
            </div>
            <div>
                <input className="register-input" type="password" placeholder="Enter Password"></input>
            </div>
            <div>
                <input type="checkbox"></input>
                <label>Agree Terms and Conditions</label>
            </div>
            <div>
                <button className="register-btn" type="button" >Register</button>
            </div>
        </div>
        <Footer/>
    </>
};