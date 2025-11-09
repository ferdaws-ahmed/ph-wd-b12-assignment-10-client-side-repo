// LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router'; 
import { IoEyeOff, IoEye } from 'react-icons/io5'; 
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  const [show, setShow] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log('Login attempt:', { email, password });
    alert('Login attempted!');
    // আপনার আসল লগইন লজিক এখানে লিখুন
  };

  const handleGoogleLogin = () => {
    console.log('Attempting Google login');
    alert('Google Login attempted!');
    // আপনার Google লগইন লজিক এখানে লিখুন
  };

  return (
    
    <div className='flex justify-center items-center min-h-screen 
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
                    dark:from-gray-900 dark:via-blue-900 dark:to-purple-900
                    text-gray-900 dark:text-white
                    // Animation classes can be uncommented if configured in tailwind.config.js
                    // animate-gradient-background bg-[length:200%_200%]
                    p-4 sm:p-6'>

      <div className="card bg-base-100 dark:bg-gray-800 w-full max-w-sm shrink-0 shadow-2xl 
                      rounded-2xl border border-gray-200 dark:border-gray-700
                      hover:shadow-3xl transition-all duration-300 ease-in-out">
        
        <h1 className='text-center text-3xl font-extrabold mt-6 mb-4 
                       text-indigo-700 dark:text-indigo-400'>
          Login to Your Account
        </h1>

        <form onSubmit={handleLogin} className="card-body py-0"> 
          <fieldset className="fieldset space-y-4"> 
            
            {/* Email Input */}
            <div className="form-control"> 
              <label className="label">
                <span className="label-text text-base font-semibold dark:text-gray-300">Email</span>
              </label>
              <input 
                type="email" 
                name='email' 
                className="input input-bordered w-full text-base dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                placeholder="you@example.com" 
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-base font-semibold dark:text-gray-300">Password</span>
              </label>
              <input 
                name='password' 
                type={show ? "text" : "password"} 
                className="input input-bordered w-full text-base dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                placeholder="••••••••" 
                required
              />
              <span 
                onClick={()=> setShow(!show)} 
                className='absolute right-4 top-[calc(50%+10px)] -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400' 
              >
                {show ? <IoEyeOff size={18} /> : <IoEye size={18} />} 
              </span>
            </div>

            {/* Forget Password Link */}
            <div className='text-right'> 
              <Link 
                to="/forgetpassword" 
                className="link link-hover text-sm font-medium text-blue-500 dark:text-blue-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button 
              className="btn btn-primary w-full mt-4 text-lg font-bold
                         transform transition-transform duration-200 hover:scale-[1.01] 
                         shadow-md shadow-blue-500/30"
            >
              Login
            </button>

           
            <div className='flex justify-center items-center gap-3 py-2'> 
              <div className='h-px flex-grow bg-gray-300 dark:bg-gray-600'></div> 
              <span className='text-gray-500 dark:text-gray-400'>or</span>
              <div className='h-px flex-grow bg-gray-300 dark:bg-gray-600'></div>
            </div>

            {/* Google Login Button */}
            <button 
              type="button" 
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full text-base flex items-center justify-center gap-2 
                         border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white
                         transition-colors duration-200"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>

            {/* Register Link */}
            <p className='text-center mt-6 text-gray-600 dark:text-gray-400'>
              Don't Have an account?{' '}
              <Link 
                to='/register' 
                className='text-base font-bold text-indigo-600 dark:text-indigo-400 hover:underline'
              >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;