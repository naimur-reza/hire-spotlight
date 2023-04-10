import React from "react";

const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-152px)] flex justify-center items-center">
      <div className="h-16  w-16 border-[7px]  rounded-full border-dotted border-sky-600 animate-spin"></div>
    </div>
  );
};

export default Loading;
