import React, { useContext, useEffect, useState } from "react";
import { JobDataContext } from "../../../../App";
import { useLoaderData, useParams } from "react-router-dom";
import background from "../../../../assets/All Images/Vector.png";
import background2 from "../../../../assets/All Images/Vector-1.png";
import { addToDb } from "../../../../utils/fakedb";

const SingleDetails = () => {
  const params = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/data.json");
      const json = await data.json();

      const job = json.jobs?.find((job) => job.id === parseInt(params.jobId));
      setData(job);
    };
    fetchData();
  }, []);

  // handle apply now
  const handleApply = (id) => {
    addToDb(id);
  };
  // const allData = useContext(JobDataContext);
  const {
    id,
    description,
    position,
    company,
    requirements,
    location,
    salary,
    experience,
    responsibilities,
  } = data;
  return (
    <div className="p-6 lg:p-0 my-container gap-3  mt-10 flex flex-col lg:flex-row">
      <div className="max-w-2xl space-y-4">
        <h1 className="tracking-wide">
          <span className="text-lg font-semibold  text-gray-800">
            Job Description
          </span>
          :
          <span className="text-gray-700 text-sm lg:text-base">
            {description}
          </span>
        </h1>
        <ul>
          <span className="text-lg font-semibold ">Job Responsibility</span>:
          {responsibilities?.map((rs) => (
            <li className="text-gray-600 text-sm lg:text-base list-inside list-disc">
              {rs}
            </li>
          ))}
        </ul>
        <ul className="list-disc">
          <h1 className="text-lg font-semibold text-gray-800">
            Educational Requirements:
          </h1>
          {requirements?.map((rq) => (
            <li className="list-decimal list-inside text-sm lg:text-base text-gray-700">
              {rq}
            </li>
          ))}
        </ul>
        <h1>
          <span className="font-semibold text-lg text-gray-700">
            Experience:
          </span>
          {experience}
        </h1>
      </div>
      <div className="flex  flex-col gap-5 py-10 lg:p-0">
        <div className=" p-5 space-y-3 bg-gradient-to-r from-[#7E90FE1A] to-[#e3dafc] rounded-md">
          <h1
            className="text-gray-800 font-semibold text-lg
          ">
            Job Details
          </h1>
          <hr className="border border-slate-400" />
          <p className="text-gray-700">
            <span className="text-gray-800 font-semibold">Job Title</span>:{" "}
            {position}
          </p>
          <h1 className="text-gray-700">
            <span className="text-gray-800 font-semibold">Salary</span>:{" "}
            {salary}
          </h1>
          <h1 className="text-gray-700">
            <span className="text-gray-800 font-semibold">Company</span>:{" "}
            {company}
          </h1>
          <h1 className="text-gray-800 font-semibold text-lg">
            Contact Information
          </h1>
          <hr className="border border-slate-400" />
          <p className="text-gray-700">
            <span className="text-gray-800 font-semibold">Email</span>:
            info@gmail.com
          </p>
          <p className="text-gray-700">
            <span className="text-gray-800 font-semibold">Phone</span>: 01750-00
            00 00
          </p>
          <p className="text-gray-700">
            <span className="text-gray-800 font-semibold">Address</span>:{" "}
            {location}
          </p>
        </div>

        <button onClick={() => handleApply(id)} className="btn-primary">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default SingleDetails;
