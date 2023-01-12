import React from "react";
import { GiRecycle } from "react-icons/gi";
import { BiRepost } from "react-icons/bi";
import { BsPatchPlus, BsLightningCharge } from "react-icons/bs";

export default function CarPost({
   color,
   recommendNum,
   img,
   carName,
   likes,
   price,
}) {
   return (
      <div
         className={`flex flex-col flex-1 py-4 
         px-7 gap-[10px] ${color} rounded-xl`}
      >
         <div className="flex flex-row items-center gap-2 ">
            <GiRecycle className="text-gray-600" />
            <p className="text-md font-semibold">{recommendNum}% Recommend</p>
         </div>
         <div className="max-w-[257px] max-h-[106px] ">
            <img
               src={img}
               alt={carName}
               className="w-full h-full object-cover"
            />
         </div>
         <h3 className="font-bold text-xl">{carName}</h3>
         <div className="flex justify-between items-center ">
            <div className="flex items-center gap-2 text-gray-500">
               <BiRepost className="text-lg" />
               <p className="text-sm">{likes}K</p>
               <BsPatchPlus />
               <BsLightningCharge />
            </div>
            <div>
               <p className="text-gray-500">${price}/h</p>
            </div>
         </div>
      </div>
   );
}
