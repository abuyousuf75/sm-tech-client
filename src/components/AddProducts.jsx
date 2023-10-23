import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddProducts = () => {
    //handelAddProducts
    const handelAddProducts = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const ratting = form.ratting.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const category = form.job_category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newProducts = { name, ratting, brand, price, category, details, photo };

        fetch('https://sm-tech-backend.vercel.app/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        {
                            title: "Success",
                            text: "Product added sucessfuly",
                            icon: "success",
                            confirmButtonText: "cool"
                        }
                    )
                }
            })
        form.reset();

            
    }


    return (
        <div className="container ">
            <div className="pt-8 mb-8 ">
                <Link className="" to='/'><button className="text-xl font-semibold flex justify-center items-center"> <FaArrowLeft /> Back to home</button></Link>
            </div>
            <div className="bg-[#F4F3F0] pt-16 pb-16 rounded">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-[#374151] mb-4">Add New Products</h2>
                    <p style={{ color: 'rgba(27, 26, 26, 0.70)' }} className="md:w-[600px] lg:w-[800px]  m-auto">Please provide : Image, Name,Brand Name,category , Price ,Short description</p>
                </div>
                {/* input form start here */}
                <form onSubmit={handelAddProducts}>
                    {/* form row  */}
                    <div className="md:flex gap-6 px-10 py-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2"> Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Inter Products name" name="name" className="input  w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2">  Rating</span>
                            </label>
                            <label className="input-group">
                                <input name="ratting" type="text" placeholder="Inter Rating" className="input w-full" required />
                            </label>
                        </div>
                    </div>

                    {/* form row brand name */}
                    <div className="md:flex gap-6 px-10 py-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2"> Brand</span>
                            </label>
                            <label className="input-group">
                                <input name="brand" type="text" placeholder="Enter brand name" className="input  w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2">Price</span>
                            </label>
                            <label className="input-group">
                                <input name="price" type="text" placeholder="Inter Price" className="input w-full" required />
                            </label>
                        </div>
                    </div>
                    {/* form row Category */}
                    <div className="md:flex gap-6 px-10 py-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2"> Category</span>
                            </label>

                            <label className="input-group input w-full">

                                <select name="job_category" >
                                    <option value=''>Select</option>
                                    <option value='phone'>Smart Phone</option>
                                    <option value='tablet'>Tablet</option>
                                    <option value='pc'>Pc</option>
                                    <option value='gadgets'>Gadgets</option>
                                </select>

                            </label>



                            {/* axdadad */}
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Inter short description" className="input w-full" required />
                            </label>
                        </div>
                    </div>
                    {/* form photo url */}
                    <div className="px-10 py-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl mb-2"> Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Inter photo URL" className="input  w-full" required />
                            </label>
                        </div>
                    </div>
                    {/* form photo url */}
                    <div className="px-10 py-6">
                        <input type="submit" value="Add Products" className="btn btn-block text-xl bg-[#f9ac6d] capitalize hover:bg-black hover:text-white " />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;