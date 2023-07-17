import "./Navbar.css"
import { BiSearchAlt2 } from 'react-icons/bi';


const Navbar = () => {
    return (
        <div className="bg-sky-600 flex justify-center">

            <div className="navbar w-[840px]">
                <div className="navbar-start sm:hidden">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3565454</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-start bg-red-600 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="form-control">
                        <div className="input-group relative">
                            <input type="text" placeholder="Search…" className="input navbar-search outline-0 border-0" />
                            <span className="absolute text-[20px]"><BiSearchAlt2 /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;