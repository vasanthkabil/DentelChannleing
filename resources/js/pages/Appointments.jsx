import React, { useState, useEffect } from "react";
import { FaStethoscope } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Appointments = ({ appoinments }) => {
  const [appointments, setAppointments] = useState(appoinments);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        setErrorMessage(message);
        setTimeout(() => setErrorMessage(""), 3000);
      }
    }
  }, []);

  return (
    <div className="min-h-screen p-10 bg-white text-black">
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

      <div className="flex justify-between">
        <h1 className="text-3xl font-bold flex items-center gap-3 text-blue-900 mb-8">
          <FaStethoscope />
          Appointment List
        </h1>

        <a
          href="/appointments/create"
          className="inline-flex rounded-full text-blue-600 text-4xl"
        >
          <FontAwesomeIcon icon={faPlus} beatFade />
        </a>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="w-full text-sm border rounded-lg text-left">
          <thead className="bg-blue-100 text-gray-700 uppercase">
            <tr>
              <th className="px-6 py-3">Doctor ID</th>
              <th className="px-6 py-3">Appointment Date</th>
              <th className="px-6 py-3">Start Time</th>
              <th className="px-6 py-3">End Time</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((app) => (
              <tr key={app.id} className="bg-white border-b">
                <td className="px-6 py-4">{app.doctor_id}</td>
                <td className="px-6 py-4">
                  {new Date(app.date).toISOString().split("T")[0]}
                </td>
                <td className="px-6 py-4">
                  {new Date(app.start_time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
                <td className="px-6 py-4">
                  {new Date(app.end_time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
                <td className="px-6 py-4">{app.status}</td>
                <td className="px-6 py-4">
                  <form
                    method="POST"
                    action={`/appointments/${app.id}`}
                    onSubmit={(e) => {
                      if (!confirm("Are you sure you want to delete this appointment?")) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value={document.querySelector('meta[name="csrf-token"]')?.getAttribute("content")}
                    />
                    <input type="hidden" name="_method" value="DELETE" />
                    <button
                      type="submit"
                      className="text-red-500 hover:text-red-700 font-semibold"
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}

            {appointments.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No appointments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
