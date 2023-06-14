import React from "react";
import { useEffect } from "react";
import ImgSlider1 from "./Img/ImgSlider1.jpg";
import ImgSlider2 from "./Img/ImgSlider2.jpg";
import ImgSlider3 from "./Img/ImgSlider3.jpg";
import ImgSlider4 from "./Img/ImgSlider4.jpg";
import chevronleft from "./Img/chevron-left.png";
import chevronright from "./Img/chevron-right.png";
import Marquee from "react-fast-marquee";

const ImgSlider = () =>
{


    return(
        <>
        <div className="mainImg">
        <Marquee>          
            <img src={ImgSlider1}></img>
            
            <img src={ImgSlider2}></img>
            
            <img src={ImgSlider3}></img>
            
            <img src={ImgSlider4}></img>   
        </Marquee>
        </div>

        {/* <div className="ImgSlider-Container">
            <div className="ImgSlider">
                <div className="mainImg">       
                    <div className="myslides">
                        <img src={ImgSlider1}></img>
                    </div>
                    <div className="myslides">
                        <img src={ImgSlider2}></img>
                    </div>
                    <div className="myslides">
                        <img src={ImgSlider3}></img>
                    </div>
                    <div className="myslides">
                        <img src={ImgSlider4}></img>
                    </div> 
                </div>
            
            <a className="ImgSlider-left" onclick="plusSlides(-1)"><img src={chevronleft}></img></a>
            <a className="ImgSlider-right" onclick="plusSlides(1)"><img src={chevronright}></img></a>
            </div>

            <div className="ImgSlider-dot">
                <span className="dot" onclick="currentSlide(1)"></span>
                <span className="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
                <span className="dot" onclick="currentSlide(4)"></span>
            </div>
        </div> */}
        </>
    );
};

export default ImgSlider;