import { NavLink } from "react-router-dom";

const SubNav = () => {
    const links = <>
        <NavLink className='text-xl text-black font-bold' to='/'> <li><a>Home</a></li></NavLink>
        <NavLink className='text-xl text-black font-bold'> <li><a>Apple</a></li></NavLink>
        <NavLink className='text-xl text-black font-bold '> <li><a>Samsung</a></li></NavLink>
        <NavLink className='text-xl text-black font-bold'> <li><a>Xiaomi</a></li></NavLink>
        <NavLink className='text-xl text-black font-bold'> <li><a>Blogs</a></li></NavLink>
    </>
    return (
        <div className="bg-[#fff]">
            <div className="navbar container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {links}
                        </ul>
                    </div>
                   
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                  
                </div>
            </div>
        </div>
    );
};

export default SubNav;