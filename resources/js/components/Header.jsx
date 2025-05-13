import React from "react";

import logo from "../../images/download.png";
const Header = () => {
    return (
        <div className="basis-auto flex justify-between  bg-black w-full h-20">
            <div>
                <img src={logo} alt="logo" className="h-20 ml-5" />
            </div>
            <div className="hidden md:flex space-x-6 mt-5">
                <a href="#" className="hover:text-blue-400 text-white">
                    Home
                </a>
                <a href="#" className="hover:text-blue-400 text-white">
                    About us
                </a>
                <a href="#" className="hover:text-blue-400 text-white">
                    Services
                </a>
                <a
                    href="/appointments"
                    className="hover:text-blue-400 text-white"
                >
                    Appointments
                </a>
            </div>
            <div className="flex mt-5 gap-2">
            <div className="mt-1">
                <a
                    href="/login"
                    className="text-white outline-blue-500  bg-blue-400 hover:bg-transparent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2   focus:outline-none dark:focus:ring-blue-800"
                >
                    Login
                </a>

</div>
<div>
                <form method="POST" action="/logout">
                    <input
                        type="hidden"
                        name="_token"
                        value={document
                            .querySelector('meta[name="csrf-token"]')
                            ?.getAttribute("content")}
                    />
                    <button
                        type="submit"
                        className="text-white outline-blue-500  bg-blue-400 hover:bg-transparent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2   focus:outline-none dark:focus:ring-blue-800"
                    >
                        Logout
                    </button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Header;
