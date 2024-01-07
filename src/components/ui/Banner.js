import Image from "next/image";
import img1   from '../../assets/images/Image1.png'


const Banner = () => {
    return (
        <>
         <div className="lg:bg-yellowPrimary  rounded-xl my-10">
            <div className="lg:flex hidden justify-between items-center">
            <div className="pl-20 ">
                <h1 className="text-white ">Deliver Food To Your <br/> Door Stepl</h1>
                <h6 className="pt-3 text-lg text-yellowSecondary">Authentic Foodl, Quick Service, Fast Delivery</h6>
            </div>
            <div className="">
                <Image src ={img1} className="banner-img "  alt="banner-img" />
            </div>
            </div>
             
        </div>

        {/* for mobile devices */}

        <div className=" my-10 lg:hidden relative">
            <div className="lg:flex justify-between items-center">
            <div className="pl-2 text-center">
                <h2 className="text-gray-500 ">Deliver Food To Your  Door <br/> Stepl</h2>
                <h6 className="pt-3 text-lg text-gray1">Authentic Foodl, Quick Service, Fast Delivery</h6>
            </div>
            <div className="mt-5 bg-orange1 rounded-2xl ">
                <Image src ={img1} className="banner-img  "  alt="banner-img " />
            </div>
            </div>
             
        </div>
        </>
       
    );
};

export default Banner;