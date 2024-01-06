'use client'
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProductForm = ({ isOpen, onClose }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        toast.success("Product added successfully");
        reset()
        onClose()
      }
    if (!isOpen) {
        return null;
      }

    return (
        
      
        <dialog className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex items-center justify-center z-10">
          <div className="bg-globalBody p-8 rounded-lg shadow-md w-[440px]">
          <div className="flex justify-between items-center">
          <h4 className="py-2 text-orangePrimary">Add Product</h4>
          <button
              onClick={onClose}
              className=" text-orangePrimary text-xl mb-2"
            >
             X
            </button>
          </div>

           
            {/* Modal content */}
           
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input  type="text" {...register("Name")} className="border w-full px-2 py-3 rounded-lg outline-none"  placeholder="Enter Product Name" required/>
      <br/>  <br/>
      <input  type="text" {...register("ImageUrl")} className="border w-full px-2 py-3 rounded-lg outline-none"  placeholder="Enter Product Img link" required/>
      <br/>  <br/>
      <input  type="number" {...register("price")} className="border w-full px-2 py-3 rounded-lg outline-none"  placeholder="Enter Product Price" required/>
      <br/>  <br/>
      <label>IsPopular</label>
      <br/>  
      <select {...register("IsPopular")} className="border w-full px-2 py-3 rounded-lg outline-none" required>
        <option value="true">True</option>
        <option value="false">false</option>
       
      </select>
      <br/>  <br/>
      <label>IsRecomended</label>
      <br/>  
      <select {...register("IsRecommended")} className="border w-full px-2 py-3 rounded-lg outline-none" required>
      <option value="true">True</option>
        <option value="false">false</option>
      </select>
      <br/>  <br/>

      
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      <input type="submit" value="Add Product" className="bg-orangePrimary text-white px-3 py-2 rounded hover:bg-yellowPrimary transition-all duration-300 delay-150"/>
      <button
              onClick={onClose}
              className=" mx-4 bg-gray1  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
    </form>

            {/* Close button */}
           
          </div>
        </dialog>
    
   
    );
};

export default AddProductForm;