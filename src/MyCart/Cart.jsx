
import { Link, useLoaderData, useParams } from "react-router-dom";
import CartProducts from "./CartProducts";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Route/AuthProvider";
import { FaArrowLeft } from "react-icons/fa";


const Cart = () => {
    // const cartItems = useLoaderData();
    const {user} = useContext(AuthContext);
    


    const [products , setProducts] = useState([]);

    useEffect(() =>{
        fetch(`https://sm-tech-backend.vercel.app/myCart/${user?.email}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[user])
   

  
   

    return (
        <div className="container pt-10 pb-10">
             <Link className="" to='/'><button className="text-xl font-semibold flex justify-center items-center"> <FaArrowLeft /> Back to Home</button></Link>
              <h2 className="text-center font-bold mb-10 text-4xl">My cart Items</h2>
             
             <div className="grid md:grid-cols-4  gap-4 ">
                    {
                        products.map(items => <CartProducts key={items._id} remaingProducts={products} setProducts={setProducts} items={items}></CartProducts>)
                    }

              </div> 


        </div>
        
    );
};

export default Cart;