import React from "react";
import { RxDashboard, RxCalendar } from "react-icons/rx";
import { RiScissors2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import {
   AiOutlineCar,
   AiOutlineShoppingCart,
   AiOutlineSetting,
} from "react-icons/ai";
import { BiMessageDetail, BiLogOut } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
   return (
      <div
         className="hidden sm:flex flex-col justify-between 
         w-[248px] h-screen px-[30px] py-[24px]"
      >
         <div className="flex flex-col gap-3">
            <div>
               <h3 className="font-bold text-2xl">Motiv. </h3>
            </div>
            <ul className="flex flex-col gap-3 ">
               <Item icon={<RxDashboard />} title="Dashboard" />
               <Item icon={<CgProfile />} title="Assets" />
               <Item icon={<AiOutlineCar />} title="Booking" />
               <Item icon={<BsBag />} title="Sell Cars" />
               <Item icon={<AiOutlineShoppingCart />} title="Buy Cars" />
               <Item icon={<RiScissors2Line />} title="Services" />
               <Item icon={<RxCalendar />} title="Calender" />
               <Item icon={<BiMessageDetail />} title="Messages" />
            </ul>
         </div>
         <ul>
            <Item icon={<AiOutlineSetting />} title="Settings" />
            <Item icon={<BiLogOut />} title="Log out" />
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
