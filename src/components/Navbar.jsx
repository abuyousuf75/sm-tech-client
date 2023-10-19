import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import user from '../assets/user.png';

const Navbar = () => {
    const links = <>
        <NavLink  className='text-xl hover:bg-red-500  text-black lg:text-white font-bold' to='/'> <li><a>Home</a></li></NavLink>
        
        <NavLink to='/addProducts' className='text-xl hover:bg-red-500 text-black lg:text-white font-bold'> <li><a>Add Products</a></li></NavLink>
        <NavLink to='/myCart' className='text-xl text-black hover:bg-red-500 lg:text-white font-bold '> <li><a>My Cart</a></li></NavLink>
    </>
    return (
        <section className=" bg-[#2c2b49]">
            <div className="navbar container text-[#f20231] py-4">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {links}
                        </ul>
                    </div>
                   <div className="flex gap-4 justify-center items-center">
                    <img className="w-16 h-10" src={logo} alt="" />
                    <Link to='/'> <a className=" text-white normal-case font-bold md:text-2xl">SM TECH</a></Link>
                   </div>
                </div>
                {/* nav center */}

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {links}
                    </ul>
                </div>
                {/* cart and profile start here */}
                <div className="navbar-end">

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <li><a>Name:</a></li>
                            <li><a>Email:</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    {/* login btn */}
                    <button className="btn ml-8">Login</button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;