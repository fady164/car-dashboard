import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
   return (
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
   );
}
