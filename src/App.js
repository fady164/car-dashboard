import { Route, Routes } from "react-router";
import Booking from "./pages/booking/Booking";
import Dashboard from "./pages/dashboard/Dashboard";
import Sidebar from "./pages/global/Sidebar";
import Topbar from "./pages/global/Topbar";

function App() {
   return (
      <div className="flex body-font font-DM-Sans">
         <Sidebar />
         <div className="flex-1">
            <Topbar />
            <div className="h-full bg-gray-100 p-10">
               <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/booking" element={<Booking />} />
               </Routes>
            </div>
         </div>
      </div>
   );
}

export default App;
