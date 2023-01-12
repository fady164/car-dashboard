import React from "react";

export default function DateItem({ bgColor, fontColor, title }) {
   return (
      <div
         className={`h-[20px] flex items-center cursor-pointer hover:shadow-sm py-[10px] px-3 rounded-3xl ${bgColor}`}
      >
         <p className={`${fontColor} text-xs font-medium`}>{title}</p>
      </div>
   );
}
