import Image from "next/image";
import img2 from "../../../assets/images/Image2.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { CgGoogle } from "react-icons/cg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-yellowPrimary pb-20">
      <div className="container">
        <div className="grid lg:grid-cols-2">
          <div className="pl-10">
            <div className="relative py-14 pr-6">
              <input
                type="email"
                className="relative px-3 py-3 rounded-xl w-full"
                placeholder="Enter Your Email"
              />
              <button className="flex items-center absolute top-[61px] right-9  bg-orangePrimary text-white rounded-2xl pl-10 pr-2 py-2">
                <span className="pr-2 font-semibold"> Subscribe</span>{" "}
                <IoIosArrowRoundForward className="text-3xl" />
              </button>
            </div>

            <div>
              <h2>
                pti<span className="text-orangePrimary">.</span>
              </h2>
              <div className="flex justify-between items-center">
                <p>Copyright@Tripp.All Right Reserved</p>
                <div className="flex">
                  <Link
                    href="/ "
                    className="text-orangePrimary bg-gray2  p-2 rounded-full "
                  >
                    <CgGoogle />
                  </Link>
                  <Link
                    href="/"
                    className="text-orangePrimary bg-gray2 p-2 rounded-full mx-2"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href="/"
                    className="text-orangePrimary bg-gray2  p-2 rounded-full"
                  >
                    <FaInstagram className="" />
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
  );
};

export default Footer;
