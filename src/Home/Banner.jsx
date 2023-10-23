import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import slider1 from '../assets/bannerImg/Budget_Smart_Watch.webp';
import slider2 from '../assets/bannerImg/Galaxy_Watch_5.webp';
import slider3 from '../assets/bannerImg/Slider_2_Main.webp';

const Banner = () => {
   
     

   

    const slider = (
        <AwesomeSlider  cssModule={AwsSliderStyles} >
          <div  data-src={slider1} />
          <div data-src={slider2} />
          <div data-src={slider3}/>
        </AwesomeSlider>
        );

     
    return (
        
        <div className="container md:flex md:relative pb-5 pt-5 justify-between">
             
             {/* for slider */}
           <div className=" md:w-[70%] swiper-wrapper swiper">
            {slider }
           </div>
           {/* for hot deals */}
           <div className="md:w-[25%] pt-16 md:pt-0 bg-[#f5f5f5] p-6 rounded-lg md:absolute md:right-0">
           <h2 className='text-xl font-bold p-4 text-[#ff6c2a]'>Best Deal For Today </h2>
               
           </div>
        </div>
    );
};

export default Banner;