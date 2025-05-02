import { useState } from "react";
import kanu from "../../images/kanu.jpg";

const Register = () => {
  return (

    
     

      <div className="min-h-screen flex flex-col justify-center items-center px-20 mt-10">
        <div className="w-full max-w-md bg-white p-8">
          <h2 className="text-3xl font-bold text-black mb-4">Register</h2>

          <form method="POST" action="/register">
            <input
              type="hidden"
              name="_token"
              value={document.querySelector('meta[name="csrf-token"]')?.getAttribute("content")}
            />

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-500">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-500">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-500">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-100 text-white hover:text-black font-semibold rounded-lg transition duration-200"
            >
              Register
            </button>

            <p className="text-gray-400 mb-6 p-4 ml-9">
              Already registered?{" "}
              <a href="/login" className="text-blue-400 underline hover:text-blue-300">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    
  );
};

export default Register;
