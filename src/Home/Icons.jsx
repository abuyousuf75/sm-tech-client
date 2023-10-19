import { FaTruck,FaHandshake,FaCreditCard,FaLightbulb,FaClipboardList} from "react-icons/fa";

const Icons = () => {
    return (
        <div className="container md:pt-16 md:pb-10 ">
            <div className="md:grid md:grid-cols-5 gap-4" >
                <div className=" p-8 bg-[#ffffff] shadow flex justify-center items-center flex-col rounded-lg text-center">
                <FaTruck className="text-[#fe6c2a] text-5xl"></FaTruck>
                <p className="text-xl mt-4 font-semibold">On Time Delivery </p>
                </div>
                <div className=" p-8 bg-[#ffffff] shadow flex justify-center items-center flex-col rounded-lg text-center">
                <FaHandshake className="text-[#fe6c2a] text-5xl"></FaHandshake>
                <p className="text-xl mt-4 font-semibold">Best Deals </p>
                </div>
                <div className=" p-8 bg-[#ffffff] shadow flex justify-center items-center flex-col rounded-lg text-center">
                <FaCreditCard className="text-[#fe6c2a] text-5xl"></FaCreditCard>
                <p className="text-xl mt-4 font-semibold">Secure Payment </p>
                </div>
                <div className=" p-8 bg-[#ffffff] shadow flex justify-center items-center flex-col rounded-lg text-center">
                <FaLightbulb className="text-[#fe6c2a] text-5xl"></FaLightbulb>
                <p className="text-xl mt-4 font-semibold">Expert Product Advice </p>
                </div>
                <div className=" p-8 bg-[#ffffff] shadow flex justify-center items-center flex-col rounded-lg text-center">
                <FaClipboardList className="text-[#fe6c2a] text-5xl"></FaClipboardList>
                <p className="text-xl mt-4 font-semibold">Easy Return Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Icons;