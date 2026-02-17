import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center ">
                <div className="bg-white border-t border-b hover:shadow-2xl hover:shadow-[#de7373] border-[#de7373] shadow-2xl rounded-3xl p-10 w-full max-w-md">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                        Welcome Back
                    </h2>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#71b6af] transition duration-300"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#71b6af] transition duration-300"
                        />
                    </div>

                    {/* Login Button */}
                    <button className="w-full bg-[#fa4c4c] text-white font-bold py-3 rounded-xl hover:bg-red-600 transition duration-300">
                        Login
                    </button>

                    {/* OR Divider */}
                    <div className="flex items-center my-6">
                        <hr className="flex-1 border-gray-300" />
                        <span className="mx-2 text-gray-400">OR</span>
                        <hr className="flex-1 border-gray-300" />
                    </div>

                    {/* Google Login */}
                    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl hover:shadow-lg transition duration-300">
                        <FcGoogle size={24} /> Continue with Google
                    </button>

                    {/* Footer */}
                    <p className="text-center text-gray-500 mt-6">
                        Don't have an account? <Link to={'/register'} className="text-[#71b6af] font-semibold">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;