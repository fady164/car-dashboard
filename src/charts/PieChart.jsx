import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { data } from "../data/pieChartData";

export default function PieChart() {
   return (
      <ResponsivePie
         data={data}
         margin={{ top: 4, right: 8, bottom: 2, left: 15 }}
         valueFormat=" >-"
         innerRadius={0.75}
         cornerRadius={45}
         activeInnerRadiusOffset={7}
         activeOuterRadiusOffset={8}
         borderColor={{
            from: "color",
            modifiers: [["darker", "0.3"]],
         }}
         enableArcLinkLabels={false}
         arcLinkLabelsSkipAngle={11}
         arcLinkLabelsTextColor="#333333"
         arcLinkLabelsThickness={3}
         arcLinkLabelsColor={{ from: "color" }}
         enableArcLabels={false}
         arcLabelsRadiusOffset={0.3}
         arcLabelsSkipAngle={10}
         arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
         }}
         defs={[
            {
               id: "dots",
               type: "patternDots",
               background: "inherit",
               color: "rgba(255, 255, 255, 0.3)",
               size: 4,
               padding: 1,
               stagger: true,
            },
            {
               id: "lines",
               type: "patternLines",
               background: "inherit",
               color: "rgba(255, 255, 255, 0.3)",
               rotation: -45,
               lineWidth: 6,
               spacing: 10,
            },
         ]}
         fill={[
            {
               match: {
                  id: "ruby",
               },
               id: "dots",
            },
            {
               match: {
                  id: "c",
               },
               id: "dots",
            },
            {
               match: {
                  id: "go",
               },
               id: "dots",
            },
            {
               match: {
                  id: "python",
               },
               id: "dots",
            },
            {
               match: {
                  id: "scala",
               },
               id: "lines",
            },
            {
               match: {
                  id: "lisp",
               },
               id: "lines",
            },
            {
               match: {
                  id: "elixir",
               },
               id: "lines",
            },
            {
               match: {
                  id: "javascript",
               },
               id: "lines",
            },
         ]}
         legends={[]}
      />
   );
}
