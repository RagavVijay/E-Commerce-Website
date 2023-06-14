import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import location from "./Img/location-icon.png";
import facebook from "./Img/facebook-icon1.png";
import instagram from "./Img/instagram-icon1.png";
import twitter from "./Img/twitter-icon1.png";

export default function Contact()
{
    return<>
    <Header/>
        <div className="contact-container">
            <div className="contact-container-1">
                <div className="contact-location">
                    <h1>location</h1>
                    <p><a href="#"><img className="contact-location-img" src={location} ></img></a>
                    68,Karapakkam,Chennai-600 098.
                    </p>
                </div>
                <div>
                    <h1>follow us</h1>
                    <div>
                        <a  href="#"><img className="contact-location-img" src={facebook}></img></a>
                        <a  href="#"><img className="contact-location-img" src={instagram}></img></a>
                        <a  href="#"> <img className="contact-location-img" src={twitter}></img> </a>
                    </div>
                </div>
            </div>
            <div className="contact-container-2">
                <h1>contact form</h1>
                <input type="text" placeholder="Enter your Name"></input>
                <input type="email" placeholder="Enter a valid Email address"></input>
                <textarea placeholder="Enter your Message"></textarea>
                <button className="contact-submit" type="submit"> Submit</button>
            </div>
        </div>
    <Footer/>
    </>
}