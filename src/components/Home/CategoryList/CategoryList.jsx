import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryList = () => {
  // const { categories } = category;
  const { categories } = useLoaderData();
  // console.log(items);
  return (
    <div className="py-14">
      <h1 className="text-center font-semibold text-3xl text-gray-800">
        Job Category List
      </h1>
      <p className="text-center py-5 text-gray-700">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="card-container grid-cols-2 grid lg:grid-cols-4 gap-3 font-semibold">
        {categories?.map((pd, idx) => (
          <div
            key={pd.id}
            className="bg-gray-100 p-4 space-y-2 text-gray-700 cursor-pointer rounded-md">
            <img src={pd.logo} alt="" />
            <p>{pd.name}</p>
            <p>{pd.available}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
