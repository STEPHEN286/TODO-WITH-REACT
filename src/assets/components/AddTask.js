import React, { useRef, useState } from "react";
import { v4 as id } from "uuid";

function AddTask({ project, onDeleteProject }) {
  const [tasks, setTasks] = useState([]);
  const taskInputRef = useRef();
  function handleAddTask() {
    const taskInput = taskInputRef.current.value;

    const newTask = { id: id(), taskInput };
    console.log(newTask);
    setTasks((prevTask) => [...prevTask, newTask]);
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
            ref={taskInputRef}
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
          {tasks.map((task) => {
            const { taskInput, id } = task;
            return (
              <div key={id} className="flex justify-between my-3">
                <p>{taskInput}</p>
                <button>clear</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AddTask;
