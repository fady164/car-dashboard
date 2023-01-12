import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function NotificationIcon() {
   return (
      <div className="text-3xl relative cursor-pointer rounded-full hover:shadow-sm">
         <IoIosNotificationsOutline />
         <div
            className="absolute rounded-full flex justify-center items-center w-[9px] h-[9px] 
          bg-white top-1 right-1 cursor-pointer"
         >
            <div className=" rounded-full w-2 h-2 bg-red-400 top-0 right-0"></div>
         </div>
      </div>
   );
}
