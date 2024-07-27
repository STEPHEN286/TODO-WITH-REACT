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


  const handleSelectedProject = (project) => {
    setSelectedProject(project);
    console.log(project)
    setIsClicked(false);
  };

  const handleCancel = () => setIsClicked(false)
  
  function handleSaveProject(projectData) {
    const newProject = { ...projectData, id: UUIDV4() };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setIsClicked(false);
  }

  // console.log(projects);
  
  let displayContent;

  if (isClicked) {
    displayContent = <NewProject onCancel={handleCancel} onAdd={handleSaveProject} />;
  } else if (selectedProject) {
    displayContent = <AddTask  project={selectedProject} />;
  } else if (!isClicked) {
    displayContent = <NoProject onClick={handleAddProject} />;
  }

  return (
    <div className=" mx-auto grid grid-cols-3 h-screen ">
      <Sidebar
        onClick={handleAddProject}
        projects={projects}
        onProjectSelect={handleSelectedProject}
        selectedProject={selectedProject}
      />

      <div className="col-span-2  flex items-center">{displayContent}</div>
    </div>
  );
}

export default App;
