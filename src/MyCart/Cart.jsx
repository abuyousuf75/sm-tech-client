
import { Link, useLoaderData, useParams } from "react-router-dom";
import CartProducts from "./CartProducts";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Route/AuthProvider";


const Cart = () => {
    // const cartItems = useLoaderData();
    const {user} = useContext(AuthContext);
    


    const [products , setProducts] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/myCart/${user?.email}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[user])
   

    // const {name, ratting, brand, price, category, details, photo ,_id}= cartItems;
  
   

    return (
        <div className="container pt-10 pb-10">
              <h2 className="text-center font-bold mb-10 text-4xl">My cart Items</h2>
             <div className="grid md:grid-cols-4  gap-4 ">
                    {
                        products.map(items => <CartProducts key={items._id} items={items}></CartProducts>)
                    }

              </div> 







        </div>
        
    );
};

export default Cart;