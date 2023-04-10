import React, { useContext } from "react";
import { getJobCart } from "../../utils/fakedb";
import { JobDataContext } from "../../App";

const AppliedJob = () => {
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
          className=" p-3 border  my-container flex gap-4 my-3 items-center  rounded-md">
          <div className="w-32 p-2 bg-gray-200 h-32 flex items-center justify-center rounded-md">
            <img className="w-full  bg-gray-200" src={job?.logo} alt="" />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-semibold text-gray-700 ">
              {job.position}
            </h1>
            <h1 className="text-md text-gray-500 font-medium">
              {job?.company}
            </h1>
            <button className="btn-outline">Onsite</button>{" "}
            <button className="btn-outline">{job?.worktime}</button>
            <h1 className="text-gray-500 font-medium">{job?.location}</h1>
          </div>
          <div className="ml-auto">
            <button className="btn-primary">View Details</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AppliedJob;
