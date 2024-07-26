import React from "react";

function AddTask({ projects }) {
  const { id, tittleRef } = projects;
  // const findItem = projects.find((item) => item.id === id);

  // console.log("findId", findItem);
  projects.map((project) => {
    
  })
  return (
    <div className="w-4/5 p-9">
      <div className="border-b py-2">
        <div flex className="flex  justify-between items-center">
          <h1 className="font-extrabold text-3xl">Title</h1>
          <button>delete</button>
        </div>
        <p className="text-gray-500">Date</p>

        <p>Description</p>
      </div>

      <div className="mt-3">
        <h1 className="font-bold text-3xl">Task</h1>
        <div className="flex gap-2">
          <input
            type="text"
            id="username"
            class="p-2  bg-gray-200 border-b-0 rounded outline-none  focus:border-b-2 border-blue-900 "
          />
          <button>add task</button>
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
