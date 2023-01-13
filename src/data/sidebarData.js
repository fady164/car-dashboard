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

export const sidebarData = [
   {
      icon: <RxDashboard />,
      title: "Dashboard",
   },
   { icon: <CgProfile />, title: "Assets" },
   { icon: <AiOutlineCar />, title: "Booking" },
   { icon: <BsBag />, title: "Sell Car" },
   { icon: <AiOutlineShoppingCart />, title: "Buy Car" },
   { icon: <RiScissors2Line />, title: "Services" },
   { icon: <RxCalendar />, title: "Calender" },
   { icon: <BiMessageDetail />, title: "Messages" },
   { icon: <AiOutlineSetting />, title: "Settings" },
   { icon: <BiLogOut />, title: "Log out" },
];
