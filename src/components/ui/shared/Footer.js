import Image from "next/image";
import img2 from "../../../assets/images/Image2.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { CgGoogle } from "react-icons/cg";
import Link from "next/link";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <>
      <div className="bg-yellowPrimary pb-20 hidden lg:block">
        <div className="container">
          <div className="grid lg:grid-cols-2">
            <div className="pl-10">
              <div className="relative py-14 pr-6">
                <input
                  type="email"
                  className="relative px-3 py-3 rounded-xl w-full"
                  placeholder="Enter Your Email"
                />
                <button className="flex items-center absolute top-[61px] right-9  bg-orangePrimary text-white rounded-2xl pl-10 pr-2 py-2  justify-center overflow-hidden  shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
                  <span className="pr-2 font-semibold relative z-10">
                    {" "}
                    Subscribe
                  </span>{" "}
                  <IoIosArrowRoundForward className="text-3xl" />
                </button>
              </div>

              <div>
                <h2 className="font-bold">
                  pti<span className="text-orangePrimary">.</span>
                </h2>
                <div className="flex justify-between items-center pt-3">
                  <p>Copyright@Tripp.All Right Reserved</p>
                  <div className="flex">
                    <Link
                      href="/ "
                      className="text-orangePrimary bg-gray2  p-3 rounded-full relative  overflow-hidden border border-indigo-600  shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-yellowPrimary before:duration-300 before:ease-out hover:text-white hover:shadow-yellowPrimary hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
                    >
                      <span className="relative z-10">
                        {" "}
                        <CgGoogle />
                      </span>
                    </Link>
                    <Link
                      href="/"
                      className="text-orangePrimary bg-gray2  p-3 rounded-full relative  overflow-hidden border border-indigo-600  shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-yellowPrimary before:duration-300 before:ease-out hover:text-white hover:shadow-yellowPrimary hover:before:h-40 hover:before:w-40 hover:before:opacity-80 mx-2"
                    >
                      <span className="relative z-10">
                        {" "}
                        <FaTwitter />
                      </span>
                    </Link>
                    <Link
                      href="/"
                      className="text-orangePrimary bg-gray2  p-3 rounded-full relative  overflow-hidden border border-indigo-600  shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-yellowPrimary before:duration-300 before:ease-out hover:text-white hover:shadow-yellowPrimary hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
                    >
                      <span className="relative z-10">
                        {" "}
                        <FaInstagram />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image src={img2} className="banner-img w-50" alt="banner-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <MobileFooter />
      </div>
    </>
  );
};

export default Footer;
