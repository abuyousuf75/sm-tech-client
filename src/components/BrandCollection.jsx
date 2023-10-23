
import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import { Link, useLoaderData, useParams } from "react-router-dom";
import slider1 from '../assets/bannerImg/Budget_Smart_Watch.webp';
import slider2 from '../assets/bannerImg/Galaxy_Watch_5.webp';
import slider3 from '../assets/bannerImg/Slider_2_Main.webp';
import Swal from "sweetalert2";
import FilterProducts from "./FilterProducts";
import { FaArrowLeft } from "react-icons/fa";



const BrandCollection = () => {

    const allProducts = useLoaderData();

   const slider = (
    <AwesomeSlider  cssModule={AwsSliderStyles} >
      <div  data-src={slider1} />
      <div data-src={slider2} />
      <div data-src={slider3}/>
    </AwesomeSlider>
    );

    return (
        <div className="container">
           <div className="pt-10 pb-10">
           {slider}
           </div>
           <div className="pt-4 pb-4 md:pt-10 md:pb-10">
                <h2 className="text-center font-bold md:text-4xl text-[#fe6c2a]">Browser here all  products</h2>
           </div>
           <div className="pt-8 mb-8 ">
                <Link className="" to='/'><button className="text-xl font-semibold flex justify-center items-center"> <FaArrowLeft /> Back to home</button></Link>
            </div>
        {/* cart items here */}
        <div className="md:grid md:grid-cols-4 justify-center items-center gap-4">
        {
            allProducts.map(Aproduct => <FilterProducts key={Aproduct._id} Aproduct={Aproduct}></FilterProducts>)
        }
        
        </div>


        </div>
    );
};

export default BrandCollection;
