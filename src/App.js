import NoProject from "./assets/components/NoProject";
import Sidebar from "./assets/components/Sidebar";
import React, { useState } from "react";
import NewProject from "./assets/components/NewProject";
import { getTimestamp } from "./assets/utils/getTimestamp";
import AddTask from "./assets/components/AddTask";
import { v4 as UUIDV4 } from "uuid";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleAddProject = () => {
    setIsClicked(true);
  };


  const handleSelectedProject = (projectId) => {
    setSelectedProject(projectId);
    setIsClicked(false);
  };

  const handleCancel = () => setIsClicked(false)
  
  function handleSaveProject(projectData) {
    const newProject = { ...projectData, id: UUIDV4() };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setIsClicked(false);
  }

  let displayContent;

  if (isClicked) {
    displayContent = <NewProject onCancel={handleCancel} onAdd={handleSaveProject} />;
  } else if (selectedProject) {
    displayContent = <AddTask projects={projects} />;
  } else if (!isClicked) {
    displayContent = <NoProject onClick={handleAddProject} />;
  }

  return (
    <div className=" mx-auto grid grid-cols-3 h-screen ">
      <Sidebar
        onClick={handleAddProject}
        projects={projects}
        onProjectSelect={handleSelectedProject}
      />

      <div className="col-span-2  flex items-center   ">{displayContent}</div>
    </div>
  );
}

export default App;
