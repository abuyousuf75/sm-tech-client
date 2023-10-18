import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <section className=" bg-[#2c2b49]">
            <div className="navbar container text-[#f20231] py-4">
                <div className="navbar-start   md:w-[200px]    lg:mr-40">
                   <Link to='/'> <a className=" text-white normal-case font-bold md:text-2xl">SM TECH</a></Link>
                </div>
                <div className="navbar-center m-auto md:w-[400px] lg:w-[700px]  ">
                    <div className="form-control">
                        <input type="text" placeholder="Search Your Product..." className="input input-bordered lg:w-[700px] md:w-[400px]" />
                    </div>
                </div>
                {/* cart and profile start here */}
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn mr-4 btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
                            <li><a>Name:</a></li>
                            <li><a>Email:</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;