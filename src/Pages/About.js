import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About1 from "./Img/About1.jpg"

export default function About()
{
    return<>
    <Header/>
        <div className="aboutcontainer">
            <img className="aboutimage" src={About1}></img>
            <p className="abouttext"><h2>ABOUT US</h2>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SPARROW was brought into the world through a progression of spring-up stores in 2014. 
            We needed to offer enhanced shopping background and inventive motivation and associate with those with a similar vision. 
            Today our objective continues as before.
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In 2015, we opened the ways to our leader store in Chicago, US. 
            In this space, we work crosswise over various mediums, from fashion and photography to accommodation. 
            There’s nothing we won’t do. Joint efforts are constantly invited and sustained.
            Summer 2016 saw the dispatch of Sparrow‘s eponymous mark, which centers around quality, wearability, and present-day effortlessness. 
            We cherish the sentiment of unisex garments, so we plan in light of the two sexual orientations. 
            The mark exists outside of fashion seasons. We will continue adding to the line consistently, so keep your eyes stripped.
            </p>                                                                                
        </div>
    <Footer/>
    </>
}