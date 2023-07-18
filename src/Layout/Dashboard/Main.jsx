import { BsFillPersonLinesFill, BsPaperclip, BsPersonVideo3, BsStarHalf } from "react-icons/bs";
import { } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { GiPublicSpeaker } from "react-icons/gi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Dashboard/Home/Navbar/Navbar";

const Main = () => {
  const adminMenu = (
    <ul
      className="text-md
    text-white py-20 space-y-2"
    >
      <li className="flex items-center gap-3 text-[#ffffffa4]"> <BsStarHalf /> Dashboard</li>
      <li className="flex items-center gap-3 text-[#ffffffa4]"><BsPersonVideo3 />Teacher</li>
      <li className="flex items-center gap-3 text-[#ffffffa4]"><BsFillPersonLinesFill /> Class</li>
      <li className="flex items-center gap-3 text-[#ffffffa4]"><PiStudentFill />Student</li>
      <li className="flex items-center gap-3 text-[#ffffffa4]"><BsPaperclip /> Notices</li>
      <li className="flex items-center gap-3 text-[#ffffffa4]"><GiPublicSpeaker /> Public Notices</li>

      <li className="flex items-center gap-3 text-[#ffffffa4]"><HiOutlineDocumentReport /> Reports</li>
    </ul>
  );
  return (
    <div className="flex">
      <div className="bg-slate-900 w-[257px] h-screen px-6">
        <div>
          <h1 className="text-3xl py-6 border-b-[2px] text-white text-center font-serif">
            AliEdustra
          </h1>
        </div>

        {adminMenu}
      </div>

      <div className="text-7xl w-full">
        <Navbar></Navbar>
        <div className="w-[840px] mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
