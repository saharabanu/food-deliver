"use client";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { useState } from "react";
import AddProductForm from "../form/AddProductForm";


const PopularProducts = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery({
    IsRecommended: true,
  });
  // console.log(products);
  const allProducts = products?.products?.Items;
  // console.log(products?.products?.Items);

  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  const openAddProductModal = () => {
    setIsAddProductModalOpen(true);
  };

  const closeAddProductModal = () => {
    setIsAddProductModalOpen(false);
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center py-3">
        <h5>Popular</h5>
        <div className="d-flex align-items-center">
        <button className="text-orangePrimary cursor-pointer" onClick={openAddProductModal}>
            Add More
          </button>
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

      <div className="grid lg:grid-cols-6 gap-4">
        {allProducts?.map((item) => (
          <div key={item?.Id} className="mb-10">
            <Image
              src={item?.ImageUrl}
              alt="product img"
              width={200}
              height={200}
              className="w-full h-full rounded-xl product-img"
            />
            <h5 className="text-center text-gray1 pt-4 ">{item?.Name}</h5>
          </div>
        ))}
      </div>

      {/* AddProductForm modal */}
      
        
      <AddProductForm isOpen={isAddProductModalOpen} onClose={closeAddProductModal}>
       
      </AddProductForm>
        
     
    </div>
  );
};

export default PopularProducts;
