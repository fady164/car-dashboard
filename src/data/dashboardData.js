import { BsFillLightningChargeFill } from "react-icons/bs";
import { CgArrowsVAlt } from "react-icons/cg";
import { GiWaterDrop, GiStoneWheel } from "react-icons/gi";

export const carsData = [
   {
      color: "bg-[#E1DFA4]",
      recommendNum: "64",
      img: "https://s3-alpha-sig.figma.com/img/6e30/c5c0/eba393b0768f90bf83a5f0c68504268b?Expires=1674432000&Signature=eznDUopkZEjcr9-6bzivgHx0SN-lvtCRCWec-~zFAz0XKoPSStGWXgcOPmh8C-KDL02L1~CDE4BmHVmcsq7alKQzl9RqD6Jjhvo72Gd4fN1MNHO5LzMDrM6pH5FuNGFUJy-vyTBO-U5ZxoJSdkDWA~qzye4iFBqCWtVpEnLF~Ad1b9XBLEH1F6mbnXQPgjahTHLn3XCi7X4Uu-WiBmmAJn3wKYfLWxS~gPmhPhdQKt-za9JZVKyz9-jSdhEKLWcQictMGaLrA-5S1~5y7HvO7BQ74SsoA5dVqWbO6zJaD0nKJ9uXUPLFn9YhqElfuTw1DNoCIwmsAiAJ-~zXWorv-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      carName: "Mini Cooper",
      likes: "132",
      price: "32",
   },
   {
      color: "bg-[#E3ECF1]",
      recommendNum: "74",
      img: "https://s3-alpha-sig.figma.com/img/40f3/84cf/52261b164862fb8f3a26f5922f688a22?Expires=1674432000&Signature=A0cI6tOcACkP0G-t-hvcQ602hbjdjQm~DW7ygYZMLot~-bebILvvgGl05J8FzEIOLXQZYZRaxWZ6ZEwBFKeea0hwHRXKTGKWpxgRR5Y04ZfqduXR176Uwr9rInsAVQ5Ft18SVyBZkVdae3yM8D5jzGOW~3i1bL4kSPMkKHj5bRKya3plwrbnB70yAoIeVE6P64yq5fupF6V7wMCYv5zn1wghfJnV3FHROymJwrjEjeddgUhaQQ-~bTtGoN2dZ2cqQluAIEWdLUAxzccrcS16aQLARyVHbxsY94ELj1BBsdBjQOguVarJtelhHp5yeftXI~qnUNxMnlB6aPZwOWIJkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      carName: "Porsche 911 Carrera",
      likes: "130",
      price: "28",
   },
   {
      color: "bg-[#F4E3E5]",
      recommendNum: "74",
      img: "https://s3-alpha-sig.figma.com/img/2554/a3e7/44c024c4b5e71c06815f2961ce2fa238?Expires=1674432000&Signature=V5xhUa11THHMlbt560crswib8wQyJBM-2JI5eYcEJESjEx5A65-hVcx1fF-Ir6~fXIkptcV7UqF-qY6OKjCIiuuj0veQ3vP23xnAX-lFa7LIv3h4gUUgVmPU6MyGS7phny884CUUld3m4nPqTCgLJaI2IV0hnqZj6ojSDpmF6snqQ84N00H5j07bKfv0jZ-9rlSr~L8rgYBjdWai8xpl5f8-RLeAYRcmeNZicedUu81dPsM-Gp8hR40i~CDtbJN0ccs85i~cgtYEW7AXrF-8uT1mPB19yBy-RL5L~4lTEMWmZITXRtj~Ot9AhrWGW1dPe5hOCfkNDys1I8I7495bsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      carName: "Porsche 911 Carrera",
      likes: "130",
      price: "28",
   },
];
export const chartsData = [
   {
      bgcolor: "bg-[#A162F7]",
      icon: <BsFillLightningChargeFill className="text-white" />,
      iconBgColor: "bg-[#A66FF0]",
      title: "energy",
      titleColor: "text-white",
      percentage: "45",
   },
   {
      bgcolor: "bg-white",
      icon: <CgArrowsVAlt className="text-[#FF7E86]" />,
      iconBgColor: "bg-[#FF7E861A]",
      title: "range",
      titleColor: "text-black",
      percentage: "157",
   },
   {
      bgcolor: "bg-white",
      icon: <GiWaterDrop className="text-[#A162F7]" />,
      iconBgColor: "bg-[#A162F71A]",
      title: "Braek fluid",
      titleColor: "text-black",
      percentage: "9",
   },
   {
      bgcolor: "bg-white",
      icon: <GiStoneWheel className="text-[#F6CC0D]" />,
      iconBgColor: "bg-[#F6CC0D1A]",
      title: "tire wear",
      titleColor: "text-black",
      percentage: "25",
   },
];
