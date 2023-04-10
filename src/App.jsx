import React, { createContext } from "react";
import Home from "./components/Home/Home";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Header/Nav";

export const JobDataContext = createContext([]);
const App = () => {
  const { jobs } = useLoaderData();
  return (
    <JobDataContext.Provider value={jobs}>
      <div>
        <Nav />
        <div className="min-h-[calc(100vh-152px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </JobDataContext.Provider>
  );
};

export default App;