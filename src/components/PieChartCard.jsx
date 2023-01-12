import React from "react";
import PieChart from "../charts/PieChart";

export default function PieChartCard({
   bgcolor,
   icon,
   iconBgColor,
   title,
   titleColor,
   percentage,
}) {
   return (
      <div
         className={`w-full h-[266px] rounded-xl py-5 px-11 flex flex-col items-center ${bgcolor} gap-[10px]`}
      >
         <div className={`${iconBgColor} rounded-full p-2`}>{icon}</div>
         <h3 className={`capitalize ${titleColor} text-2xl font-bold`}>
            {title}
         </h3>
         <div className="w-[112px] h-[112px] flex flex-col items-center justify-center">
            <PieChart />
            <h3 className="text-2xl font-bold">{percentage}%</h3>
         </div>
      </div>
   );
}
