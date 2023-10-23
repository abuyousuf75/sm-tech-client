import {  useContext, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link,  useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Route/AuthProvider";



const ProductsDetails = () => {
    const [looding, setLooding] = useState(true);
    const {user} = useContext(AuthContext);
    const email = user.email;
    console.log(email)

    const { id } = useParams();

    const [detail, setDetails] = useState([])

    

    useEffect(() => {
        fetch('http://localhost:5000/details')
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                setLooding(false)
            })

    }, [id])


    const newItems = detail.find(item => item._id === id) || {}
    const { name, brand, price,details, photo} = newItems;
    
  
    const handelAddTocart = () =>{
        const product = {...newItems,email:email}
            console.log(product)
        fetch('http://localhost:5000/myCart',{
            method : 'POST',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    text: "Sucessfuly added to cart",
    
                })
            }
           
        })
        .catch(error => {
           if(error){
            Swal.fire({
                icon: 'error',
                text: "This item alredy added",

            })
            return
           }
        })
    }


    if (looding) {
        return <div className="conatiner text-center">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    return (
        <div className="container pt-10 pb-10">
             <Link className="" to={`/products/${brand}`}><button className="text-xl font-semibold flex justify-center items-center"> <FaArrowLeft /> Back to Previous</button></Link>
            <h2 className="text-center font-bold text-4xl md:mb-10 mb-4">Products details</h2>
            <div className="grid md:grid-cols-2  ">
                <div className="border-2 md:w-[500px] flex justify-center items-center text-center">
                    <img src={photo} alt="photo" />
                </div>
                <div className="bg-[#f5f5f5] border-2 p-6">
                    <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <h2 className="text-2xl font-bold">৳{price}</h2>
                    </div>
                    <h3 className="text-xl font-bold">Brand : <span className="text-[#fe6c2a]">{brand}</span></h3>
                    <p className="text-xl pt-3">{details}</p>
                   <div className="pt-6">
                   <button onClick={handelAddTocart} className="btn hover:bg-black bg-[#fe6c2a] text-[#fff] ">Add to cart</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;