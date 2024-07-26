import React from "react";
import noProject from "../no-projects.png";

function NoProject({onClick}) {
  return (
    <div className="flex flex-col items-center  w-3/4 text-center">
      <img
        src={noProject}
        alt=""
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6"
      />

      <h1 className="text-lg font-bold" >No Project Selected</h1>

      <small className="text-gray-500 m-3">Select a project or get a new project</small>

      <button onClick={onClick} className="bg-blue-950 p-2 rounded text-white">Create New Project</button>
    </div>
  );
}

export default NoProject;
