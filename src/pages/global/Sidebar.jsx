import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarData } from "../../data/sidebarData";

export default function Sidebar() {
   return (
      <div
         className="hidden sm:flex flex-col justify-between 
         w-[248px] h-screen px-[30px] py-[24px]"
      >
         <div className="flex flex-col gap-3">
            <div className="flex gap-2">
               <div className="flex justify-center items-center rounded-md px-[5px] py-[6px] bg-[#A162F7]">
                  <img src="./logo.png" alt="" />
               </div>
               <h3 className="font-bold text-2xl">Motiv. </h3>
            </div>
            <ul className="flex flex-col gap-3 ">
               {sidebarData
                  .filter(
                     (label) =>
                        label.title !== "Settings" && label.title !== "Log out"
                  )
                  .map((label, index) => (
                     <Item icon={label.icon} title={label.title} key={index} />
                  ))}
            </ul>
         </div>
         <ul>
            {sidebarData
               .filter(
                  (label) =>
                     label.title === "Settings" || label.title === "Log out"
               )
               .map((label, index) => (
                  <Item icon={label.icon} title={label.title} key={index} />
               ))}
         </ul>
      </div>
   );
}

function Item({ icon, title }) {
   return (
      <li>
         <NavLink
            to={`/${title}`}
            className="flex items-center text-gray-500 cursor-pointer
            rounded-md py-[7px] px-[8px] focus-within:bg-gray-100 hover:bg-gray-100"
         >
            <span className="mr-2 ">{icon}</span>
            <p className="text-sm font-medium">{title}</p>
         </NavLink>
      </li>
   );
}
