

"use client";
import { LuUser2 } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searched } from "@/redux/features/filterSlice";

const MobileNavbar = () => {


  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);

  useEffect(() => {
    if (search === "") {
      setInput("");
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    
    
  };

  return (
    <>
   
    {/* for moblie devices */}
    
      <div className=" flex justify-between items-center py-3  container">
        <div>
          <h2 className="font-bold cursor-pointer hover:text-orangePrimary duration-300 delay-150 transition-all ease-in-out">pti.</h2>
        </div>
        <div className=" ">
          <div className="d-flex ">
            <div className="">
              <form onSubmit={handleSubmit}>
              <input name="search" type="search" className="bg-grayPrimary relative pl-8 rounded py-2 w-full] outline-none" placeholder="search audioBook" value={input}
        onChange={(e) => setInput(e.target.value)}/>
              <BiSearch  className=" absolute top-7 ml-2 text-orangePrimary"/>
              </form>
            </div>
            <div className="  flex1 flex bg-grayPrimary ml-2 items-center justify-between rounded px-3 pt-2 relative ">
      <h6 className="pr-4 cursor-pointer">MENU</h6>
      <h6 className="pl-5"><MdKeyboardArrowDown className="text-2xl text-orangePrimary cursor-pointer " /></h6>
      <ul className="dropdown-menu1  duration-300 delay-150 transition-all ease-in-out py-4 rounded bg-white ">
        
        
       {/* <li className="block text-decoration-none text-gray-500 hover:bg-gray-200 hover:text-orangePrimary py-1  rounded">
       <Link href="/" className="">Home</Link>
       </li> */}
        <Link href="/" className="block text-decoration-none text-gray-500 hover:bg-gray-200 hover:text-orangePrimary py-1  rounded">Home</Link>
        <Link href="/" className="block text-decoration-none text-gray-500 hover:bg-gray-200 hover:text-orangePrimary py-1  rounded">Details</Link>
        <Link href="/" className="block text-decoration-none text-gray-500  hover:bg-gray-200 hover:text-orangePrimary py-1  rounded">Category</Link>
        <Link href="/" className="block text-decoration-none text-gray-500 hover:bg-gray-200 hover:text-orangePrimary py-1  rounded">My Favourites</Link>
        <Link href="/" className="block text-decoration-none text-gray-500  hover:bg-gray-200 hover:text-orangePrimary py-1  rounded">Profile</Link>
        <Link href="/" className="block text-decoration-none text-gray-500 hover:bg-gray-200 hover:text-orangePrimary py-1  rounded">Log In/Sign Up</Link>
        
      </ul>
    </div>
          </div>
        </div>
       
      </div>


     
    
    </>
  );
};

export default MobileNavbar;
