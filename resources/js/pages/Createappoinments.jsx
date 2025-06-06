import React, { useState, useEffect } from "react";
import { FaHandHoldingMedical } from "react-icons/fa";
import appo from "../../images/appo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Appointments = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, seterrorMessage] = useState("");

  useEffect(() => {
    const flash = document.getElementById("flash-success");
    if (flash) {
      const message = flash.getAttribute("data-message");
      if (message) {
        setSuccessMessage(message);
       
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    }
  

  const error=document.getElementById("flash-error");
  if(error){
    const message=error.getAttribute('data-message');
    if(message){
      seterrorMessage(message);
      setTimeout(() => setSuccessMessage(""), 3000);

    }
  }

  
  
  
  
  
},[]);

  return (
    <div className="flex">
      <div className="w-1/2 mt-32 justify-center">
        <img src={appo} alt="logo" className="items-center rounded-full" />
      </div>

      <div className="min-h-screen flex items-center w-1/2 px-4">
        <div className="p-10">
         
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


          <h1 className="text-3xl font-bold flex gap-3 text-blue-900 mb-8">
            <FaHandHoldingMedical /> Medical Appointments
          </h1>

          <form method="POST" action="/appointments">
            <input
              type="hidden"
              name="_token"
              value={document.querySelector('meta[name="csrf-token"]')?.getAttribute("content")}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="doctor_id" className="block font-medium text-gray-700 mb-1">
                  Doctor ID
                </label>
                <input
                  type="text"
                  id="doctor_id"
                  name="doctor_id"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 text-black"
                />
              </div>

              <div>
                <label htmlFor="date" className="block font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="start_time" className="block font-medium text-gray-700 mb-1">
                  Start Time
                </label>
                <input
                  type="datetime-local"
                  id="start_time"
                  name="start_time"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-400"
                />
              </div>

              <div>
                <label htmlFor="end_time" className="block font-medium text-gray-700 mb-1">
                  End Time
                </label>
                <input
                  type="datetime-local"
                  id="end_time"
                  name="end_time"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-400"
                />
              </div>

              <div>
                <label htmlFor="status" className="block font-medium text-gray-700 mb-1">
                  Status
                </label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 text-black"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
