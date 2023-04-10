import React, { useContext } from "react";
import { getJobCart } from "../../utils/fakedb";
import { JobDataContext } from "../../App";
import { Link, useNavigation } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/solid";

const AppliedJob = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading />;
  }
  const allJobs = useContext(JobDataContext);
  let jobCart = [];
  console.log(allJobs);
  const storedJob = getJobCart();
  for (const id in storedJob) {
    const appliedJob = allJobs?.find((job) => job.id === parseInt(id));
    jobCart.push(appliedJob);
    // console.log(appliedJob);
  }

  console.log(jobCart);
  return (
    <>
      {jobCart.map((job) => (
        <div
          key={job?.id}
          className=" p-3 border  my-container flex gap-4 my-5 items-center  rounded-md">
          <div className="w-32 p-2 bg-gray-200 h-32 flex items-center justify-center rounded-md">
            <img className="w-full  bg-gray-200" src={job?.logo} alt="" />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-semibold text-gray-700 ">
              {job?.position}
            </h1>
            <h1 className="text-md text-gray-500 font-medium">
              {job?.company}
            </h1>
            <button className="btn-outline">Onsite</button>{" "}
            <button className="btn-outline">{job?.worktime}</button>
            <h1 className="text-gray-500 font-medium flex items-center">
              <span>
                {
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
                }
              </span>
              {job?.location}
            </h1>
          </div>
          <div className="ml-auto">
            <Link to={`/details/${job?.id}`}>
              <button className="btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default AppliedJob;
