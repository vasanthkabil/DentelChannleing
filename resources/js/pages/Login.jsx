import { useState,useEffect } from "react";
import kabil from "../../images/kabil.jpg";

const Login = () => {
 const [errorMessage, seterrorMessage] = useState("");
 const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {

      const flash = document.getElementById("flash-success");
      if (flash) {
        const message = flash.getAttribute("data-message");
        if (message) {
          setSuccessMessage(message);
         
          setTimeout(() => setSuccessMessage(""), 3000);
        }
      }




        const error = document.getElementById("flash-error");
        if (error) {
            const message = error.getAttribute("data-message");
            if (message) {
                seterrorMessage(message);
                setTimeout(() => seterrorMessage(""), 2000);
            }
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center  items-center ">
            <h2 className="text-3xl font-bold text-black mb-4">Login</h2>

            {successMessage && (
            <div className="bg-green-100 text-green-800 px-4 py-2 mb-4 rounded">
              {successMessage}
            </div>
          )}

            {errorMessage && (
                <div className="bg-red-100 text-red-800 px-4 py-2 mb-4 rounded">
                    {errorMessage}
                </div>
            )}

            <form method="POST" action="/login">
                <input
                    type="hidden"
                    name="_token"
                    value={document
                        .querySelector('meta[name="csrf-token"]')
                        ?.getAttribute("content")}
                />

                <div className="mb-6 ">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-500"
                    >
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
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-500"
                    >
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
                    className="w-full py-2 px- bg-blue-600 hover:bg-blue-100 text-white hover:text-black font-semibold rounded-lg transition duration-200"
                >
                    Login
                </button>

                <p className="text-gray-400 mb-6 p-4 ml-9">
                    Not registered?{" "}
                    <a
                        href="/register"
                        className="text-blue-400 underline hover:text-blue-300"
                    >
                        Register here
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Login;
