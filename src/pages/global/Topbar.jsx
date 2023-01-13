import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

export default function Topbar() {
   return (
      <div
         className="w-full  py-4 px-8 
         flex justify-between items-center flex-wrap"
      >
         <div
            className="max-w-[300px] max-h-[42px] rounded-lg px-[14px] py-3 
            flex flex-row  bg-gray-100 items-center gap-2"
         >
            <AiOutlineSearch className="text-xl cursor-pointer" />
            <input
               style={{ caretColor: "#EF9011" }}
               placeholder="Search or type"
               type="text"
               className="flex-1 bg-transparent focus:outline-none"
            />
         </div>
         <div className="hidden sm:flex items-center gap-3 ">
            <div className="text-3xl relative cursor-pointer rounded-full hover:shadow-sm">
               <IoIosNotificationsOutline />
               <div
                  className="absolute rounded-full flex justify-center items-center w-[9px] h-[9px] 
                bg-white top-1 right-1 cursor-pointer"
               >
                  <div className=" rounded-full w-2 h-2 bg-red-400 top-0 right-0"></div>
               </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-600 overflow-hidden cursor-pointer">
               <img
                  src="https://s3-alpha-sig.figma.com/img/f60f/b0cb/53ece4752b8eb610fb19de0636019a84?Expires=1674432000&Signature=mWOK1m3lMc2PU-6ceix~Dl29dFb2nZY8HKiceKivkDdZXwu0k622T~IllT6facd1ZC2-ILctes1MdyuZFNAUKS2~hXJuV50ozhpeH4A0QjnGVF9EfghC0FH2VJ6Xi3L8KDsf0z0eaKHmq1BttolzWuw~KENIP43FDKVzAN~kukvRn1uxQwPzv8SMh04eC1iisK0A4dsdtf5bwU0IL6yxlfIShloCGiHaEFD6j~qyLmN56pBGRc1711eOE6jsuj1grSrZ0YKZKDBbHTLH1Ygeo5jvLba4ekTtYRwV27xi~mHbKbvHr2~~eF-FRXKxgU6efXdmqU3ZoB9IOW98Is8auA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="profile"
                  className="w-[119px] h-[79px] object-cover"
               />
            </div>
         </div>
      </div>
   );
}
