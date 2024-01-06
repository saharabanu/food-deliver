import Image from "next/image";
import img1   from '../../assets/images/Image1.png'


const Banner = () => {
    return (
        <div className="bg-yellowPrimary rounded-xl my-10">
            <div className="flex justify-between items-center">
            <div className="pl-20 ">
                <h1 className="text-white ">Deliver Food To Your <br/> Door Stepl</h1>
                <h6 className="pt-3 text-lg text-yellowSecondary">Authentic Foodl, Quick Service, Fast Delivery</h6>
            </div>
            <div className="">
                <Image src ={img1} className="banner-img "  alt="banner-img" />
            </div>
            </div>
             
        </div>
    );
};

export default Banner;