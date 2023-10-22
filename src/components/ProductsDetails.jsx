import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const ProductsDetails = () => {
    const [looding, setLooding] = useState(true);

    const { id } = useParams();

    const [detail, setDetails] = useState([])

    console.log(id)

    useEffect(() => {
        fetch('http://localhost:5000/details')
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                setLooding(false)
            })

    }, [id])


    const newItems = detail.find(item => item._id === id) || {}
    const { name, ratting, brand, price, category,details, photo} = newItems

    if (looding) {
        return <div className="conatiner text-center">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    return (
        <div className="container">
            <h2 className="text-4xl font-bold text-center md:pt-10 md:pb-16">Products Details</h2>
            <div className="md:grid md:grid-cols-2 gap-4  items-center justify-center ">

                <img src={photo} alt="" />

            </div>
        </div>
    );
};

export default ProductsDetails;