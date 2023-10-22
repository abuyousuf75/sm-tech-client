import { useContext } from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Route/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const {loginUser,googleLogin,githubLogin} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const [showPassword, setPassword] = useState(false);

    //handelLogin
    const handelLogin = (event) =>{
        event.preventDefault()
        
        const form = event.target;
        // get user info
        
        const userEmail = form.email.value;
        const userPassword = form.password.value;
        const userInfo = { userEmail, userPassword }
        console.log(userInfo);

        //loginUser
        loginUser(userEmail,userPassword)
        .then(res => {
            console.log(res.user)
            // navigate after login 
            navigate(location?.state ?  location.state : '/')
            

            form.reset()
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                text: err.message,

            })
            form.reset()
        })

    }
    // google login
    const handelGoogleLogin = () =>{
       googleLogin()
       .then(() => {
        navigate(location.state ? location.state :'/')
      })
       
       
    }
    // github login
    const handelGithubLogin = () =>{
        githubLogin()
        .then(() =>{
            navigate(location.state ? location.state :'/')
        })
       
    }

    return (
        <div className="container">
        <div className="hero text-white mb-10 mt-20 md:w-1/2 m-auto shadow-2xl bg-[#2c2b49]">
            <div className="hero-content flex-col w-full ">
                <div className="text-center lg:text-center">
                    <h1 className="text-3xl font-bold mt-10">Login your account</h1>
                </div>
                <div className="card flex-shrink-0 md:w-full  max-w-sm">
                    <form className="card-body " onSubmit={handelLogin}>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-white">Email address</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered px-8 py-4 text-black rounded-md border-0" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-xl text-white font-semibold">Password</span>
                            </label>
                            <div className="relative ">
                                <input name="password"

                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password" className="input input-bordered px-8 py-4 text-black w-full rounded-md border-0" required />
                                <span className="text-2xl absolute cursor-pointer text-black top-3  right-4" onClick={() => setPassword(!showPassword)}>{
                                    showPassword ? <FaEye /> : <FaEyeSlash />

                                }</span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white btn-success border-0 rounded-md bg-[#fe6c2a] capitalize">Login</button>
                        </div>
                    </form>
                    <div className="md:pb-4 border-b-2">
                    <h2 className="text-center">Don’t Have An Account ? <Link to='/register'><span className="text-[#fe6c2a]">Register</span></Link></h2>
                    </div>
                    {/* forr social login */}
                    <div className="mt-4 mb-4">
                    <button onClick={handelGoogleLogin} className="btn mb-4 text-white w-full btn-success border-0 rounded-md bg-[#fe6c2a] hover:bg-[#e55189] capitalize">Login With Google</button>
                    <button onClick={handelGithubLogin} className="btn text-white w-full btn-success border-0 rounded-md bg-[#fe6c2a] hover:bg-[#e55189] capitalize">Login With Github</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;