import React from "react";
import BarChart from "../../charts/BarChart";
import LineChart from "../../charts/LineChart";
import CarPost from "../../components/CarPost";
import { carsData, chartsData } from "../../data/dashboardData";
import PieChartCard from "../../components/PieChartCard";
import StatisticsCard from "../../components/StatisticsCard";

export default function Dashboard() {
   return (
      <div className="flex flex-col gap-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chartsData.map((item, index) => (
               <PieChartCard {...item} key={index} />
            ))}
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
            <StatisticsCard
               title="Miles"
               subTitle="256 Miles"
               flexDir="row"
               datesBgColor="bg-white"
               choosenDate="bg-[#2884FF]"
               chart={<BarChart />}
            />
            <StatisticsCard
               title="Car"
               subTitle="20 February 2022"
               flexDir="row-reverse"
               datesBgColor="bg-[#F5F4F6]"
               choosenDate="bg-[#FF764C]"
               chart={<LineChart />}
            />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carsData.map((item, index) => (
               <CarPost {...item} key={index} />
            ))}
         </div>
      </div>
   );
}
