import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const BrandNames = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() =>{
        fetch('./BrandNames.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])
    return (
        <div className="container">
            <h2 className="text-4xl font-bold text-center md:pt-16 md:pb-16">Explore Our Brands</h2>
           <div className="md:grid md:grid-cols-4 gap-4  items-center justify-center ">
           {
                brands.map(brand => <div className="bg-[#fff] border  rounded" key={brand.id}>
                  
                  <Link>
                  <div className="text-xl font-bold text-center ">
                  <p className=" mt-4 text-[#fe6c2a]">{brand.brand}</p>
                   <img src={brand.image}></img>
                  </div></Link>
                </div>)
            }
           </div>
        </div>
    );
};

export default BrandNames;