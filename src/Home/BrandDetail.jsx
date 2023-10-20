import { Link } from "react-router-dom";




const BrandDetail = ({brand}) => {
   
  const {brand_name, image,id} = brand;
   

    return (
       <Link to ={`/brand/${id}`}>
         <div className="border">
           <p className="text-xl font-bold text-center mt-10">{brand_name}</p>
            <img src={image} alt="brandImg" />

        </div>
       </Link>
    );
};

export default BrandDetail;