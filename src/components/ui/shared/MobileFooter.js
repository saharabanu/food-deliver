import Image from "next/image";
import img2 from "../../../assets/images/Image2.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { CgGoogle } from "react-icons/cg";
import Link from "next/link";

const MobileFooter = () => {
  return (
    <div className="bg-yellowPrimary pb-20">
      <div className="container">
        <div className="">
          <div className="pl-10">
            <div className="relative py-14 pr-6">
              <input
                type="email"
                className="relative px-3 py-3 rounded-xl w-full"
                placeholder="Enter Your Email"
              />
              <button className="flex items-center absolute top-[61px] right-9  text-orangePrimary  rounded-2xl pl-10 pr-2 py-2">
                <span className="pr-2 font-semibold"> Subscribe</span>{" "}
                <IoIosArrowRoundForward className="text-3xl" />
              </button>
            </div>

            <div>
              
              <div className="space-y-10 text-center">
               
                <div className="flex items-center justify-center">
                  <Link
                    href="/ "
                    className="bg-orangePrimary text-white  p-3 rounded-full "
                  >
                    <CgGoogle />
                  </Link>
                  <Link
                    href="/"
                    className="bg-orangePrimary text-white  p-3 rounded-full mx-2"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href="/"
                    className="bg-orangePrimary text-white  p-3 rounded-full"
                  >
                    <FaInstagram className="" />
                  </Link>
                </div>

                <h1 className="font-bold text-3xl">
                pti<span className="text-orangePrimary">.</span>
              </h1>

              <h6 className="font-bold">Copyright@Tripp.All Right Reserved</h6>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
