// RegisterPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router';
import { IoEyeOff, IoEye } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // Password Validation
    setPasswordError(''); // Clear previous error
    if (!/[A-Z]/.test(password)) {
      setPasswordError('Password must have an Uppercase letter.');
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError('Password must have a Lowercase letter.');
      return;
    }
    if (password.length < 6) {
      setPasswordError('Password length must be at least 6 characters.');
      return;
    }

    console.log('Register attempt:', { name, email, photoURL, password });
    alert('Registration attempted! Check console for details.');
    // আপনার আসল রেজিস্ট্রেশন লজিক এখানে লিখুন (যেমন, Firebase/Backend API কল)
  };

  const handleGoogleLogin = () => {
    console.log('Attempting Google registration/login');
    alert('Google Login attempted!');
    // আপনার Google রেজিস্ট্রেশন/লগইন লজিক এখানে লিখুন
  };

  return (
    <div className='min-h-screen flex items-center justify-center 
                    bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-600 
                    dark:from-gray-900 dark:via-purple-900 dark:to-blue-900
                    text-gray-900 dark:text-white
                    p-4 sm:p-6'>

      <div className="card bg-base-100 dark:bg-gray-800 w-full max-w-lg shrink-0 shadow-2xl 
                      rounded-2xl border border-gray-200 dark:border-gray-700
                      hover:shadow-3xl transition-all duration-300 ease-in-out">
        
        <h1 className='text-center text-3xl font-extrabold mt-6 mb-4 
                       text-blue-700 dark:text-blue-400'>
          Create Your Account
        </h1>

        <form onSubmit={handleRegister} className="card-body py-0">
          <fieldset className="fieldset space-y-4"> 
            
            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold dark:text-gray-300">Full Name</span>
              </label>
              <input 
                type="text" 
                name='name' 
                className="input input-bordered w-full text-base dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                placeholder="John Doe" 
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold dark:text-gray-300">Email Address</span>
              </label>
              <input 
                type="email" 
                name='email' 
                className="input input-bordered w-full text-base dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                placeholder="you@example.com" 
                required
              />
            </div>

            {/* Photo URL Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold dark:text-gray-300">Photo URL</span>
              </label>
              <input 
                type="url" 
                name='photoURL' 
                className="input input-bordered w-full text-base dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                placeholder="https://example.com/your-photo.jpg" required
              />
            </div>

            {/* Password Input */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-base font-semibold dark:text-gray-300">Password</span>
              </label>
              <input 
                name='password' 
                type={showPassword ? "text" : "password"} 
                className="input input-bordered w-full text-base dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                placeholder="••••••••" 
                required
              />
              <span 
                onClick={()=> setShowPassword(!showPassword)} 
                className='absolute right-4 top-[calc(50%+10px)] -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400' 
              >
                {showPassword ? <IoEyeOff size={18} /> : <IoEye size={18} />} 
              </span>
            </div>

            {/* Password Validation Error Message */}
            {passwordError && (
              <p className="text-red-500 text-sm italic mt-2">{passwordError}</p>
            )}

            {/* Register Button */}
            <button 
              type="submit"
              className="btn btn-secondary w-full mt-4 text-lg font-bold
                         transform transition-transform duration-200 hover:scale-[1.01] 
                         shadow-md shadow-purple-500/30"
            >
              Register
            </button>

            {/* Divider for Social Login */}
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

            {/* Login Page Redirect Link */}
            <p className='text-center mt-6 text-gray-600 dark:text-gray-400'>
              Already have an account?{' '}
              <Link 
                to='/login' 
                className='text-base font-bold text-blue-600 dark:text-blue-400 hover:underline'
              >
                Login here
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
