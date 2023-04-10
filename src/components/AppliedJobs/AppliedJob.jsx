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
    <div className="p-2">
      {jobCart.map((job) => (
        <div
          key={job?.id}
          className=" p-3 border  my-container flex gap-4 my-5 items-center  rounded-md">
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
            <button className="btn-outline">Onsite</button>{" "}
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
  );
};

export default AppliedJob;
