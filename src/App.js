import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import Card  from "./components/Card";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  
  return (
    <div className="flex">
      
     <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      <div className="grow ml-16 md:ml-64 h-full lg:h-screen text-gray-900">
      <Navbar sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle} />
      <Dashboard sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle} />
      </div>
    </div>
  );
}
export default App;

