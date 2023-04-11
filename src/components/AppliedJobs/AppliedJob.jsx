import React, { useContext, useEffect, useState } from "react";
import { getJobCart } from "../../utils/fakedb";
import { JobDataContext } from "../../App";
import { Link, useNavigation } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/solid";

const AppliedJob = () => {
  const [appliedJob, setAppliedJob] = useState([]);
  const [isFilter, setFilter] = useState([]);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading />;
  }

  // get all Jobs data using context api
  const allJobs = useContext(JobDataContext);
  let jobCart = [];
  // get storedJobs dat from local storage
  const storedJob = getJobCart();
  // filter out the applied jobs from allJobs
  useEffect(() => {
    for (const id in storedJob) {
      const appliedJob = allJobs?.find((job) => job.id === parseInt(id));
      jobCart.push(appliedJob);
    }
    setAppliedJob(jobCart);
    setFilter(jobCart);
  }, []);
  // this is filter feature
  const handleRemoteJob = () => {
    const remoteJobs = appliedJob.filter((job) => job.work_type === "Remote");
    setFilter(remoteJobs);
  };
  const handleOnsideJob = () => {
    const cartJobs = allJobs.filter;
    const remoteJobs = appliedJob.filter((job) => job.work_type === "Onside");
    setFilter(remoteJobs);
  };
  console.log(isFilter);
  console.log(appliedJob);
  return (
    <div className="my-container">
      <div className="flex justify-end my-5">
        <button
          onClick={() => handleRemoteJob()}
          className="hover:bg-indigo-500 duration-200 bg-indigo-400 px-4 py-2 rounded-lg ml-3 text-white font-semibold">
          Show Remote Jobs
        </button>
        <button
          onClick={() => handleOnsideJob()}
          className="hover:bg-indigo-500 duration-200 bg-indigo-400 px-4 py-2 rounded-lg ml-3 text-white font-semibold">
          Show Onside Jobs
        </button>
      </div>
      <div className="p-2">
        {isFilter.map((job) => (
          <div
            key={job?.id}
            className=" p-3 border   flex gap-4 my-5 items-center  rounded-md">
            <div className="lg:w-32 w-24 h-24 p-2 bg-gray-200 lg:h-32 flex items-center justify-center rounded-md">
              <img className="w-full  bg-gray-200" src={job?.logo} alt="" />
            </div>
            <div className="lg:space-y-2 space-y-1">
              <h1 className="lg:text-xl text-base font-semibold text-gray-700 ">
                {job?.position}
              </h1>
              <h1 className="lg:text-md text-sm text-gray-500 font-medium">
                {job?.company}
              </h1>
              <button className="btn-outline">{job?.work_type}</button>{" "}
              <button className="btn-outline">{job?.worktime}</button>
              <h1 className="text-gray-500 font-medium flex items-center">
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
      </div>
    </div>
  );
};

export default AppliedJob;
