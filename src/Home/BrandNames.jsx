
import { useLoaderData } from "react-router-dom";
import BrandDetail from "./BrandDetail";



const BrandNames = () => {
    const brandItems = useLoaderData();
    
    return (
        <div className="container">
            <h2 className="text-4xl font-bold text-center md:pt-10 md:pb-16">Explore Our Brands</h2>
           <div className="md:grid md:grid-cols-3 gap-4   items-center justify-center ">
            {
                brandItems.map(brands => <BrandDetail key={brands.id} brands={brands}></BrandDetail>)
            }
          
           </div>
        </div>
    );
};

export default BrandNames;