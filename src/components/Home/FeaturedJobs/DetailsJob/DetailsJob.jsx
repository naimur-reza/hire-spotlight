import React, { createContext, useContext } from "react";
import { MapIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { JobDataContext } from "../../../../App";
export const singleDetails = createContext([]);
const DetailsJob = ({ job }) => {
  const allData = useContext(JobDataContext);
  const { company, logo, id, location, salary, worktime, position, work_type } =
    job;
  const navigate = useNavigate();
  return (
    <div className="border p-5 space-y-2 relative">
      <div className="w-28 h-24 flex items-center justify-center">
        <img
          className="w-full
      "
          src={logo}
          alt=""
        />
      </div>
      <h1 className="text-xl font-semibold">{position}</h1>
      <p className="text-base text-gray-700 pb-2">{company}</p>
      <span className="btn-outline">{work_type}</span>{" "}
      <span className="btn-outline">{worktime}</span>
      <p className="text-gray-700 py-2 text-md flex items-center">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {salary}
      </p>
      <p className="flex items-center gap-1 text-gray-700">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </span>
        {location}
      </p>
      <br />
      <Link to={`/details/${id}`}>
        <button
          onClick={() => navigate(id)}
          className=" bottom-2 bg-gradient-to-t  from-indigo-400 to-indigo-500 roun
          ded-md text-gray-50 rounded-md px-3 transition-all hover:bg-indigo-600 py-1 font-semibold">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default DetailsJob;
