import React from "react";
import CarCard from "../../components/CarCard";
import { RxDashboard } from "react-icons/rx";
import { GiSettingsKnobs } from "react-icons/gi";
import { data } from "../../data/bookingData";

export default function Booking() {
   return (
      <div className="flex flex-col gap-9">
         <div>
            <h1 className="font-bold text-2xl">Booking</h1>
         </div>
         <div className="flex justify-between">
            <div className="">
               <ul className="flex gap-2">
                  <DropDownList options={["new", "old", "top"]} />
                  <DropDownList options={["Toyota", "BMW", "Skoda"]} />
               </ul>
            </div>
            <div className="flex gap-2">
               <div
                  className="bg-white shadow-sm hover:shadow-md rounded-full 
                  p-2  cursor-pointer"
               >
                  <RxDashboard />
               </div>
               <div
                  className="bg-[#A162F7] text-white shadow-sm hover:shadow-md 
                  rounded-full p-2 cursor-pointer "
               >
                  <GiSettingsKnobs />
               </div>
            </div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, index) => (
               <CarCard key={index} img={item.img} />
            ))}
         </div>
      </div>
   );
}

function DropDownList({ options }) {
   return (
      <li>
         <div className="relative w-full lg:max-w-sm">
            <select
               className="w-full py-1 px-3 text-gray-500 bg-white 
               rounded-full shadow-sm outline-none capitalize cursor-pointer "
            >
               {options.map((item, index) => (
                  <option className="capitalize" key={index}>
                     {item}
                  </option>
               ))}
            </select>
         </div>
      </li>
   );
}
