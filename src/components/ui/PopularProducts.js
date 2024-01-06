"use client";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";



const PopularProducts = () => {
  const {data:products, isLoading, isError} = useGetAllProductsQuery();
  const allProducts = products?.products?.Items;
  // console.log(products?.products?.Items)

  
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center">
        <h5>Popular</h5>
        <div className="d-flex align-items-center">
          <button className="text-orangePrimary">Add More</button>
          <div className="pt-2 pl-2">
            <button>
              <MdKeyboardArrowLeft />
            </button>
            <button>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
 

 <div>
  {allProducts?.map((item)=><div key={item?.Id}>
    <Image/>
     <h5>{item?.Name}</h5>
  </div>)}
    
 </div>

    </div>
  );
};

export default PopularProducts;
