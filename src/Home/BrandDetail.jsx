
import { useEffect } from "react";
import { Link, useLoaderData, useParams} from "react-router-dom";


const BrandDetail = ({brands}) => {


    const { brand, photo  ,name } = brands;
    

    return (
       <Link to ={`products/${brand}`}>
         <div className="border">
           <p className="text-xl font-bold text-center mt-10">{name}</p>
            <img src={photo} alt="brandImg" />

        </div>
       </Link>
    );
};

export default BrandDetail;