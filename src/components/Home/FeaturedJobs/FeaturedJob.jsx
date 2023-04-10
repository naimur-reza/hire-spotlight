import React, { useContext, useEffect, useState } from "react";
import { JobDataContext } from "../../../App";
import DetailsJob from "./DetailsJob/DetailsJob";
import { useSearchParams } from "react-router-dom";
import { data } from "autoprefixer";

const FeaturedJob = () => {
  const [showAll, setShowAll] = useState(false);
  const [job, setJob] = useState([]);
  // const jobListData = useContext(JobDataContext);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setJob(data.jobs));
  }, []);
  console.log(job);
  return (
    <div className="py-10">
      <h1 className="text-center text-3xl font-semibold text-gray-800">
        Featured Job
      </h1>
      <p className="text-gray-700 text-center py-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {job.slice(0, showAll ? 8 : 4).map((job) => (
          <DetailsJob job={job} key={job.id} />
        ))}
      </div>
      {!showAll && (
        <div className="text-center py-5">
          <button onClick={() => setShowAll(!showAll)} className="btn-primary ">
            See All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedJob;
