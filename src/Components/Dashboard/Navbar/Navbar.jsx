import "./Navbar.css";
import {
  BiCalendar,
  BiSearchAlt2,
  BiSolidBell,
  BiSolidFlagAlt,
} from "react-icons/bi";
import { MdComputer } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-sky-600 flex justify-center">
      <div className="navbar w-[840px] ">
        <div className="navbar-start sm:hidden">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3565454</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-start hidden lg:flex w-auto">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary className="font-bold text-[#ffffff89]">UI Components</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="text-[#ffffff89] font-bold ">Layouts</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end ml-auto  w-2/3 space-x-3">

          <div className="form-control">
            <div className="input-group relative ">
              <input
                type="text"
                placeholder="Search…"
                className="input rounded-none outline-0 border-0 navbar-search  bg-[#10101022] text-white"
              />
              <span className="absolute text-[20px] right-0 flex h-full bg-transparent text-white">
                <BiSearchAlt2 />
              </span>
            </div>
          </div>

          <div className="nav-icons text-[20px] flex text-white gap-2 border-r-[1px] pr-2">
            <BiSolidBell />
            <BiCalendar />
            <BiSolidFlagAlt />
          </div>
          <span className="nav-icons text-[20px] gap-1 flex text-white">
            <MdComputer /> 
            <span className="text-sm font-bold">My Dashbord</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
