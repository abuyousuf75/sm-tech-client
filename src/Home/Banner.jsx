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
           <h2 className='text-xl font-bold p-4 text-[#ff6c2a]'>Upcoming Campaigns </h2>
               <div className='bg-white mb-6 rounded  p-6'>
                 {/* first campaign */}
                   <div className='flex gap-2 mb-4 justify-center items-center'>
                   <h4 className='font-semibold m-auto'>Happy Hour:</h4>
                    
                    <div className='w-16 h-10 flex text-center bg-[#4f4e4e]'>
                        <h2 className='text-white '>2d</h2>
                    </div>
                    <div className='w-16 h-10 flex bg-[#4f4e4e]'>
                       <h2 className='text-white '>10h</h2>
                    </div>
                   </div>
                   <div className='flex gap-2 justify-start items-center'>
                   <h4 className='font-semibold'>Cam.Start in</h4>
                
                    <div className='w-16 h-10 bg-[#4f4e4e]'>
                    <h2 className='text-white '>50m</h2>
                    </div>
                    <div className='w-16 h-10 bg-[#4f4e4e]'>
                    <h2 className='text-white '>10s</h2>
                    </div>
                   </div>
               </div>
               
           </div>
        </div>
    );
};

export default Banner;