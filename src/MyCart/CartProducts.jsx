

const CartProducts = ({items}) => {
    const {photo,name,brand,category,price,ratting} = items;
    return (
        <div>
            <div className="card rounded bg-[#fff] border-2 p-4">
            <figure className="w-full"><img src={photo} alt="pImg" /></figure>
            <div className="flex justify-between items-center w-full ">
                <div className="text-xl">
                    <div className="flex gap-2 items-center">
                        <h2 className=" text-xl">Name: </h2>
                        <span className="text-md">{name}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <h2 className=" text-xl">Brand: </h2>
                        <span className="text-md">{brand}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <h2 className=" text-xl">Category: </h2>
                        <span className="text-xl">{category}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <h2 className=" text-xl">Price: </h2>
                        <span className="text-md">{price} Bdt</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <h2 className=" text-xl">Rating: </h2>
                        <span className="text-md">{ratting} *</span>
                    </div>
                </div>
               
            </div>
            <div className="flex justify-center gap-4 pt-4 pb-4">
          
            <button className="btn bg-[#2c2b29] text-white">Buy now</button>
            <button className="btn bg-[#fe6c2a]">DELETE</button>
            </div>
        </div>
                </div>
       
    );
};

export default CartProducts;