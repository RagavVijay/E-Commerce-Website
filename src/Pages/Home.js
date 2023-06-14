import React from "react";
import Header from "./Header";
import ImgSlider from "./ImgSlider";
import Footer from "./Footer";
import Productlist from "./Productlist"

const Home = () => 
{
    return(
        <div>
            <Header></Header>
            <ImgSlider></ImgSlider>
            <Productlist></Productlist>
            <Footer></Footer>
        </div>
    );
};

export default Home;