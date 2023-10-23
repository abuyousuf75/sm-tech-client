import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="container text-center ">
           <div className="pt-10 md:pt-20">
                <h2 className="text-xl mb-4"> Opppsss......</h2>
                <h3 className="text-2xl md:text-5xl font-bold">404</h3>
               <Link to ='/'>
               <button className="px-10 rounded text-white mt-4 py-4 bg-[#fe6c2a]">Back to home</button></Link>
           </div>
        </div>
    );
};

export default Error;
