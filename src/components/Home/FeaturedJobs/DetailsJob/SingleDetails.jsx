import React, { useContext } from "react";
import { JobDataContext } from "../../../../App";
import { useLoaderData, useParams } from "react-router-dom";
import background from "../../../../assets/All Images/Vector.png";
import background2 from "../../../../assets/All Images/Vector-1.png";

const SingleDetails = () => {
  const allData = useContext(JobDataContext);
  const data = useParams();
  const job = allData.find((job) => job.id === parseInt(data.jobId));
  const {
    description,
    position,
    company,
    requirements,
    location,
    salary,
    experience,
  } = job;
  return (
    <div className="">
      <div className="my-container  mt-10 flex flex-col lg:flex-row">
        <div className="max-w-2xl space-y-4">
          <h1 className="tracking-wide">
            <span className="text-lg font-semibold  text-gray-800">
              Job Description
            </span>
            :<span className="text-gray-700">{description}</span>
          </h1>
          <p>
            <span className="text-lg font-semibold ">Job Responsibility</span>:
          </p>
          <ul className="list-disc">
            <h1 className="text-lg font-semibold text-gray-800">
              Educational Requirements:
            </h1>
            {requirements.map((rq) => (
              <li className="list-decimal text-gray-700">{rq}</li>
            ))}
          </ul>
          <h1>
            <span className="font-semibold text-lg text-gray-700">
              Experience:
            </span>
            {experience}
          </h1>
        </div>
        <div className="flex  flex-col gap-5">
          <div className=" p-5 space-y-3 bg-gradient-to-r from-[#7E90FE1A] to-[#e3dafc] rounded-md">
            <h1
              className="text-gray-800 font-semibold text-lg
          ">
              Job Details
            </h1>
            <hr className="" />
            <p className="text-gray-700">
              <span className="text-gray-800 font-semibold">Job Title</span>:{" "}
              {position}
            </p>
            <h1 className="text-gray-700">
              <span className="text-gray-800 font-semibold">Salary</span>:{" "}
              {salary}
            </h1>
            <h1 className="text-gray-800 font-semibold text-lg">
              Contact Information
            </h1>
            <hr />
            <p className="text-gray-700">
              <span className="text-gray-800 font-semibold">Email</span>:
              info@gmail.com
            </p>
            <p className="text-gray-700">
              <span className="text-gray-800 font-semibold">Phone</span>:
              01750-00 00 00
            </p>
            <p className="text-gray-700">
              <span className="text-gray-800 font-semibold">Address</span>:{" "}
              {location}
            </p>
          </div>

          <button className="btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleDetails;