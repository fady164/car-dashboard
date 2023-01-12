import React from "react";
import SearchBar from "../../components/SearchBar";
import NotificationIcon from "../../components/NotificationIcon";
import Avatar from "../../components/Avatar";

export default function Topbar() {
   return (
      <div
         className="w-full  py-4 px-8 
         flex justify-between items-center flex-wrap"
      >
         <SearchBar />
         <div className="hidden sm:flex items-center gap-3 ">
            <NotificationIcon />
            <Avatar />
         </div>
      </div>
   );
}
