'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";

const AddProductForm = ({ isOpen, onClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data)
    if (!isOpen) {
        return null;
      }

    return (
        
      
        <dialog className="fixed top-0 left-0  flex items-center justify-center">
          <div className="bg-globalBody p-8 rounded shadow-md">
            {/* Modal content */}
           
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" type="text" {...register("Name")} className="border w-full"  placeholder="Enter Product Name"/>
      <br/>  <br/>
      <input defaultValue="test" type="text" {...register("ImageUrl")} className="border w-full"  placeholder="Enter Product Img link"/>
      <br/>  <br/>
      <input defaultValue="test" type="number" {...register("price")} className="border w-full"  placeholder="Enter Product Price"/>
      <br/>  <br/>
      <label>IsPopular</label>
      <br/>  
      <select {...register("IsPopular")}>
        <option value="true">True</option>
        <option value="false">false</option>
       
      </select>
      <br/>  <br/>
      <label>IsRecomended</label>
      <br/>  
      <select {...register("IsRecommended")}>
      <option value="true">True</option>
        <option value="false">false</option>
      </select>
      <br/>  <br/>

      
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      <input type="submit" />
    </form>

            {/* Close button */}
            <button
              onClick={onClose}
              className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </dialog>
    
   
    );
};

export default AddProductForm;