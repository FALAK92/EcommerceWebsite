import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
    {
        img: "/jacket1.webp",
        title: "Jacket",
        desc: "MEN Yarn Fleece Full-Zip Jacket",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/skirt.webp",
        title: "Skirt",
        desc: "Black Floral Wrap Midi Skirt",
        rating: 5,
        price: "55.00",
    },
    {
        img: "/partywear.jpg",
        title: "Party Wear",
        desc: "Women's Party Wear Shoes",
        rating: 3,
        price: "25.00",
    },
    {
        img: "/shirt.jpg",
        title: "Shirt",
        desc: "Pure Garment Dyed Cotton Shirt",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/casuals.jpeg",
        title: "Casual",
        desc: "Casual Men's Brown Shoes",
        rating: 5,
        price: "99.00",
    },
    {
        img: "/pw.jpeg",
        title: "Watches",
        desc: "Pocket Watch Leather Pouch",
        rating: 3,
        price: "150.00",
    },
    {
        img: "/sw.jpg",
        title: "Watches",
        desc: "Smart Watch Vital Plus",
        rating: 4,
        price: "100.00",
    },
    {
        img: "/hat.jpg",
        title: "Wollen Hat",
        desc: "Wollen Hat For Men",
        rating: 4,
        price: "12.00",
    },
    
]

const NewProduct = () => {
    return(
        <div>
        <div className="container pt-1">
            <h2 className="font-medium text-2xl pb-4">New Products</h2>

            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
            lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
{productsData.map((item, index) => (
<ProductCard key={index}
img = {item.img}
title = {item.title}
desc = {item.desc}
rating= {item.rating}
price={item.price}
/>
))};



            </div>
        </div>
        </div>
    )
}
export default NewProduct;