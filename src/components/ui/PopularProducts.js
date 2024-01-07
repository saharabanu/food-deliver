"use client";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { useState } from "react";
import AddProductForm from "../form/AddProductForm";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";


const PopularProducts = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlePrevClick = () => {
    // console.log("click");
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = () => {
    // console.log("click1");
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };
  // const handlePrevClick = () => {
  //   if (swiperInstance) {
  //     swiperInstance.slidePrev();
  //     setCurrentSlide((prev) => prev - 1);
  //   }
  // };

  // const handleNextClick = () => {
  //   if (swiperInstance) {
  //     swiperInstance.slideNext();
  //     setCurrentSlide((prev) => prev + 1);
  //   }
  // };

  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery({
    IsRecommended: true,
  });
  // console.log(products);
  const allProducts = products?.products?.Items;
  const filteredItems = allProducts?.filter(item => item.IsPopular === true);
  // console.log(filteredItems)

  const breakpoints = {
    480: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    786: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  };

  let content = null;

  if (isLoading) {
    content = (
      <>
        <div className="spinner-border text-warning text-center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );
  }

  if (!isLoading && isError) {
    content = (
      <div className="text-center">
        {" "}
        <h2> Something Went Wrong</h2>
      </div>
    );
  }

  if (!isLoading && !isError && filteredItems?.length === 0) {
    content = (
      <>
        {" "}
        <div className="text-center">
          {" "}
          <h2> No Data Found</h2>
        </div>
      </>
    );
  }

  if (!isLoading && !isError && filteredItems?.length > 0) {
    content = filteredItems?.map((item) => (
      <SwiperSlide key={item?._id}>
        {" "}
        <div key={item?.Id} className="mb-10 z-0">
          <Image
            src={item?.ImageUrl}
            alt="product img"
            width={200}
            height={200}
            className="w-full h-[300px] rounded-xl product-img"
          />
          <h5 className="text-center text-gray1 pt-4 ">{item?.Name}</h5>
        </div>
      </SwiperSlide>
    ));
  }
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
          <button
            className="text-orangePrimary cursor-pointer lg:block hidden "
            onClick={openAddProductModal}
            
          >
            Add More
          </button>
          <div className="pt-2 pl-2">
            <button onClick={handlePrevClick} className={`${
              swiperInstance && swiperInstance.isBeginning
                ? 'text-gray-500'
                : 'text-orangePrimary'
            }`}
>
              <MdKeyboardArrowLeft />
            </button>
            <button onClick={handleNextClick} className={`${
              swiperInstance && swiperInstance.isEnd
                ? 'text-gray-500'
                : 'text-orangePrimary'
            }`}>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <Swiper
          breakpoints={breakpoints}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="mySwiper"
        >
          {content}
        </Swiper>
      </div>

      {/* AddProductForm modal */}

      <AddProductForm
        isOpen={isAddProductModalOpen}
        onClose={closeAddProductModal}
      ></AddProductForm>
    </div>
  );
};

export default PopularProducts;
