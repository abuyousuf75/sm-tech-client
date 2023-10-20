import { useState } from "react";
import BrandDetail from "./BrandDetail";



const BrandNames = () => {
   
    const [brands, setBrand] = useState([])
    fetch('./Brand.json')
    .then(res => res.json())
    .then(data => setBrand(data))
    
   
    return (
        <div className="container">
            <h2 className="text-4xl font-bold text-center md:pt-10 md:pb-16">Explore Our Brands</h2>
           <div className="md:grid md:grid-cols-3 gap-4   items-center justify-center ">
            {
                brands.map(brand => <BrandDetail key={brand.id} brand={brand}></BrandDetail>)
            }
          
           </div>
        </div>
    );
};

export default BrandNames;