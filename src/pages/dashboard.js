import { useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Timeline from "../components/Timeline";

const dashboard = () => {
  useEffect(() => {
    document.title = "Instagram";
  }, []);
  return (
    <div className="bg-gray-primary">
      <Header />
      <div className="grid grid-cols-3 gap-4 mx-auto max-w-screen-lg justify-between">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
};

export default dashboard;
