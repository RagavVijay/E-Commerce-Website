import React from "react";
import {NavLink} from "react-router-dom";
import Headerimg from "./Img/Headerimg.jpg"
//import {useSelector} from "react-redux";

export default function Header()
{
    //const state = useSelector(state => state.Cart)
    //({state.length})
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
        <div className="container">    
            <div>
                <NavLink to='/'><img className="Headerimg" src={Headerimg}></img></NavLink>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto my-2 text-center">
                    <li><NavLink className="nav-link" to='/'>Home</NavLink></li>
                    <li><NavLink className="nav-link" to="/product">Products</NavLink></li>
                    <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                    <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                </ul>
                <div className="buttons text-center">
                    <NavLink to="/login" className="btn btn-primary m-2">Login</NavLink>
                    <NavLink to="/register" className="btn btn-primary m-2">Register</NavLink>
                    <NavLink to="/cart" className="btn btn-primary m-2">Cart </NavLink>
                </div>
            </div>
        </div>
        </nav>
    </>
}