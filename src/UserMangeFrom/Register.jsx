import { useContext, useState } from "react";
import { AuthContext } from "../Route/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const Register = () => {
    const { createUser } = useContext(AuthContext);
    // const [registerError, setRegisterError] = useState('');
    const [showPassword, setPassword] = useState(false);
    const navigate = useNavigate();

    //handelRegister
    const handelRegister = (event) => {

        event.preventDefault()
        // reset from
        // setRegisterError('');
        const form = event.target;
        // get user info
        const userName = form.name.value;
        const userImg = form.photo.value;
        const userEmail = form.email.value;
        const userPassword = form.password.value;
        const userInfo = { userName, userImg, userEmail, userPassword }
        console.log(userInfo);

        

        // password pattern or regular expression
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        // user password check
        if (userPassword.length < 6) {
            Swal.fire({
                icon: 'error',
                text: 'Password length must be 6 or more!',

            })
            return
        }
        else if (!pattern.test(userPassword)) {
            Swal.fire({
                icon: 'error',
                text: 'Please give a strong password ',

            })
           
            return
        }
        
        else{
           
             form.reset();
             
        }

        createUser(userEmail, userPassword)
            .then(res => {
                console.log(res.user);

                Swal.fire({
                    icon: 'sucess',
                    text: 'User Creted Sucessfuly ',
    
                })
                navigate('/')

                // send uer info after creted sucessfuly on our mongoDb

                const user = { userName, userImg, userEmail, userPassword};
                fetch('http://localhost:5000/user',{
                    method : "POST",
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    Swal.fire({
                icon: 'success',
                text: "Login successfuly",

            })

                })


            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    text: err.message,
    
                })
            })
    }



    return (
        <div className="container">
            <div className="hero text-white mb-10 mt-20 md:w-1/2 m-auto shadow-2xl bg-[#2c2b49]">
                <div className="hero-content flex-col w-full ">
                    <div className="text-center lg:text-center">
                        <h1 className="text-3xl font-bold mt-10">Register your account</h1>
                    </div>
                    <div className="card  flex-shrink-0 md:w-full  max-w-sm">
                        <form className="card-body " onSubmit={handelRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-white font-semibold">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Enter your Name" className="input input-bordered px-8 py-4 text-black rounded-md border-0" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-white font-semibold">Photo Url</span>
                                </label>
                                <input name="photo" type="text" placeholder="Photo Url" className="input input-bordered px-8 py-4 text-black rounded-md border-0" required />
                            </div>
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
                                <button className="btn text-white btn-success border-0 rounded-md bg-[#fe6c2a] capitalize">Register</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;