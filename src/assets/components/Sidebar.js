import { useState } from "react";
import AddTask from "./AddTask";

function Sidebar({ onClick, projects, onProjectSelect }) {
  return (
    <div className=" w-1/3   bg-blue-950 py-16 px-8  md:w-72">
      <h1 className="text-3xl font-bold text-white   mb-3">Your Project</h1>
      <div>
        <button
          onClick={onClick}
          className="bg-blue-300 px-5 py-2 text-blue-950 font-bold  rounded"
        >
          + Add Project
        </button>
      </div>

      <div className="mt-5">
        {projects.map((project) => {
          // console.log("sidebar/projects/project", project);
          console.log(project.id);
          return (
            <p
              onClick={() => onProjectSelect(project.id)}
              key={project.id}
              className="text-gray-500 font-medium py-2 px-1 hover:bg-blue-900 hover:text-white"
            >
              {project.titleRef}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
