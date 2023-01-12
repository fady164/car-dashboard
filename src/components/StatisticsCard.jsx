import React from "react";
import DateItem from "./DateItem";

export default function StatisticsCard({
   title,
   subTitle,
   datesBgColor,
   flexDir,
   chart,
   choosenDate,
}) {
   return (
      <div className="w-full h-[332px] bg-white flex flex-col gap-[10px]  py-4 px-7 rounded-xl">
         <p className="text-xl mb-3">
            <span className="font-bold">{title} </span>Statistics
         </p>
         <div className={`flex flex-${flexDir} justify-between items-center`}>
            <div
               className={`flex flex-row ${datesBgColor} rounded-full w-[171px] gap-[10px]`}
            >
               <DateItem
                  bgColor={choosenDate}
                  fontColor="text-white"
                  title="Day"
               />
               <DateItem
                  bgColor="bg-transparent"
                  fontColor="text-[#5F6165]"
                  title="Week"
               />
               <DateItem
                  bgColor="bg-transparent"
                  fontColor="text-[#5F6165]"
                  title="Month"
               />
            </div>
            <div>
               <h3 className="text-sm font-bold text-gray-600">{subTitle}</h3>
            </div>
         </div>
         <div className="w-full h-full">{chart}</div>
      </div>
   );
}
