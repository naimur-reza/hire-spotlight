import React from "react";
import Header from "../Header/Header";
import background from "../../assets/All Images/P3OLGJ1 copy 1.png";
import CategoryList from "./CategoryList/CategoryList";
import FeaturedJob from "./FeaturedJobs/FeaturedJob";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="my-container p-5 lg:p-0 lg:flex-row flex-col flex items-center justify-between">
          <div className="lg:w-[570px] space-y-2 lg:space-y-6">
            <h1 className=" lg:text-5xl text-3xl  text-gray-800 font-semibold leading-tight">
              One Step Closer To Your{" "}
              <span className="text-indigo-500">Dream Job</span>
            </h1>
            <p className="text-gray-700">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn-primary">Get Started</button>
          </div>
          <div>
            <img src={background} alt="" />
          </div>
        </div>
      </div>
      <div className="my-container p-3">
        <CategoryList />
        <FeaturedJob />
      </div>
    </div>
  );
};

export default Home;
