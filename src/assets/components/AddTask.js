import React, { useState } from "react";
import { v4 as Id } from "uuid";

function AddTask({ project, onDeleteProject }) {
  const [tasks, setTasks] = useState([]);
  const taskInputRef  
  function handleAddTask() {

  }
  return (
    <div className="w-4/5 p-9">
      <div className="border-b py-2">
        <div className="flex  justify-between items-center">
          <h1 className="font-extrabold text-3xl">{project.titleRef}</h1>
          <button onClick={() => onDeleteProject(project)}>delete</button>
        </div>
        <p className="text-gray-500">{project.dateRef}</p>

        <p>Description</p>
      </div>

      <div className="mt-3">
        <h1 className="font-bold text-3xl">Task</h1>
        <div className="flex gap-2">
          <input
            type="text"
            id="username"
            className="p-2  bg-gray-200 border-b-0 rounded outline-none  focus:border-b-2 border-blue-900 "
          />
          <button
            className="bg-blue-950 text-white p-2 rounded"
            onClick={handleAddTask}
          >
            add task
          </button>
        </div>
        {/* display task */}
        <div className="mt-5  bg-gray-200 p-3 rounded">
          <div className="flex justify-between my-3">
            <p>Task</p>
            <button>clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
