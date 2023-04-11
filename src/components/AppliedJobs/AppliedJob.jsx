import React, { useContext, useEffect, useState } from "react";
import { getJobCart } from "../../utils/fakedb";
import { JobDataContext } from "../../App";
import { Link, useNavigation } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/solid";
import NoData from "../Error/NoData";

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
  // check the applied jobs data is or not

  const handleFilter = (event) => {
    const value = event.target.value;
    if (value === "Remote") {
      const remoteJobs = appliedJob.filter((job) => job.work_type === "Remote");
      setFilter(remoteJobs);
    } else if (value === "Onside") {
      const remoteJobs = appliedJob.filter((job) => job.work_type === "Onside");
      setFilter(remoteJobs);
    } else if (value === "All") {
      setFilter(appliedJob);
    }
  };
  if (appliedJob.length <= 0) {
    return <NoData />;
  }
  return (
    <div className="my-container">
      <div className="flex justify-end my-5 mr-3">
        <select
          className="bg-gray-200 p-2 rounded-md outline-none border-none"
          onChange={handleFilter}>
          <option disabled>Select Job Type</option>
          <option>All</option>
          <option>Onside</option>
          <option>Remote</option>
        </select>
      </div>
      <div className="p-2">
        {isFilter.map((job) => (
          <div
            key={job?.id}
            className=" p-3 border   flex gap-4 my-5 items-center  rounded-md">
            <div className="lg:w-32 w-20 h-20 p-2 bg-gray-200 lg:h-32 flex items-center justify-center rounded-md">
              <img className="w-full  bg-gray-200" src={job?.logo} alt="" />
            </div>
            <div className="lg:space-y-2 space-y-1">
              <h1 className="lg:text-xl text-sm font-semibold text-gray-700 ">
                {job?.position}
              </h1>
              <h1 className="lg:text-md text-xs text-gray-500 font-medium">
                {job?.company}
              </h1>
              <button className="btn-outline">{job?.work_type}</button>{" "}
              <button className="btn-outline">{job?.worktime}</button>
              <h1 className="text-gray-500 text-xs lg:text-base font-medium flex items-center">
                {job?.location}
              </h1>
            </div>
            <div className="ml-auto">
              <Link to={`/details/${job?.id}`}>
                <button className="btn-primary text-sm">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
