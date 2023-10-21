import { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import { Link, useLoaderData, useParams } from "react-router-dom";
import slider1 from '../assets/bannerImg/Budget_Smart_Watch.webp';
import slider2 from '../assets/bannerImg/Galaxy_Watch_5.webp';
import slider3 from '../assets/bannerImg/Slider_2_Main.webp';
import Swal from "sweetalert2";


const BrandCollection = () => {
   
    const singleProduct = useParams([]); 
    const allProducts = useLoaderData();
    const items = allProducts.find((product) => product.brand ==singleProduct.brand);
    items;
 
    if (items === undefined || items.length === 0) {  
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="/">Go Home</a>'
          })
      }
    
    
   const {name, ratting, brand, price, category, details, photo} = items;

   const slider = (
    <AwesomeSlider  cssModule={AwsSliderStyles} >
      <div  data-src={slider1} />
      <div data-src={slider2} />
      <div data-src={slider3}/>
    </AwesomeSlider>
    );


    return (
        <div className="container">
           <div className="pt-10 pb-10">
           {slider}
           </div>
           <div className="md:pt-20 md:pb-20">
                <h2 className="text-center font-bold md:text-4xl text-[#fe6c2a]">Browser here all {brand} products</h2>
           </div>
        </div>
    );
};

export default BrandCollection;
