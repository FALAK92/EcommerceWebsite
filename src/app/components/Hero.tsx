"use client";


import React from "react";
import Slider from "react-slick"
import Slide from "./Slide";

const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,

    };

    const slideData = [
        {
            id: 0,
            img: "/b1.jpeg",
            title: "Trending Item",
            mainTitle: "Women'S LATEST FASHION SALE",
            price: "$20",
        },
        {
            id: 1,
            img: "/b2.jpg",
            title: "Trending Accessories",
            mainTitle: "MODERN SUNGLASSES",
            price: "$15",
        },
        {
            id: 2,
            img: "/b3.jpg",
            title: "Sale offer",
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "$30",
        },
    ]




    return(
        <div>
            <div className="container pt-6 lg:pt-0">
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <Slide
                        key = {item.id}
                        img = {item.img}
                        title = {item.title}
                        mainTitle = {item.mainTitle}
                        price ={item.price}
                        />

                    ))}

                </Slider>

            </div>


        </div>
    )
} 
export default Hero;