import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineUser, AiFillHeart } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";

export default function CarCard({ img }) {
   const handleFav = () => {
      setFavorite((perv) => !perv);
   };

   const [favorite, setFavorite] = useState(false);
   return (
      <div className="flex flex-col bg-white p-6 gap-2 rounded-2xl">
         <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Porshe 718 Cayman</h3>
            <span>
               {favorite ? (
                  <AiFillHeart
                     className="text-red-500  cursor-pointer "
                     onClick={handleFav}
                  />
               ) : (
                  <AiOutlineHeart
                     className="text-gray-500  cursor-pointer "
                     onClick={handleFav}
                  />
               )}
            </span>
         </div>
         <p className="text-gray-500 text-base">Coupe</p>
         <div className="max-w-[233px] max-h-[105px] ">
            <img className="w-full h-full object-contain" src={img} alt="" />
         </div>
         <div className="flex justify-between items-center ">
            <div className=" flex gap-3 ">
               <div className="flex items-center gap-1 text-gray-500 ">
                  <AiOutlineUser />
                  <span>4</span>
               </div>
               <div className="flex items-center gap-1 text-gray-500">
                  <BiRepost className="text-lg" />
                  <span>Manual</span>
               </div>
            </div>
            <p className="text-gray-500">
               <span className="text-black font-medium">$400</span>
               /d
            </p>
         </div>
      </div>
   );
}
