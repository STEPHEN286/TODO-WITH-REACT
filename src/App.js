import NoProject from "./assets/components/NoProject";
import Sidebar from "./assets/components/Sidebar";
import React, { useState } from "react";
import NewProject from "./assets/components/NewProject";
import AddTask from "./assets/components/AddTask";
import { v4 as UUIDV4 } from "uuid";

function App() {
  const [isNewProjectClicked, setisNewProjectClicked] = useState(false);
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

  const handleAddProject = () => {
    setisNewProjectClicked(true);
  };

  const handleDeleteProject = (projectToDelete) => {
    console.log("Project to delete:", projectToDelete);
    console.log("Projects before deletion:", projects);
    const remainingProjects = projects.filter(
      (project) => project.id !== projectToDelete.id
    );

    setProjects(remainingProjects);

    console.log("Remaining projects:", remainingProjects);

    if (currentProject && currentProject.id === projectToDelete.id) {
      setCurrentProject(null);
    }
  };

  const handleSelectedProject = (project) => {
    setCurrentProject(project);
    setisNewProjectClicked(false);
  };

  const handleCancel = () => setisNewProjectClicked(false);

  function handleSaveProject(projectData) {
    const newProject = { ...projectData, id: UUIDV4() };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setisNewProjectClicked(false);
  }

  // console.log(projects);
  
  let displayContent;

  if (isNewProjectClicked) {
    displayContent = (
      <NewProject onCancel={handleCancel} onAdd={handleSaveProject} />
    );
  } else if (currentProject) {
    displayContent = (
      <AddTask project={currentProject} onDeleteProject={handleDeleteProject} />
    );
  } else if (isNewProjectClicked === false) {
    displayContent = <NoProject onClick={handleAddProject} />;
  }

  return (
    <div className=" mx-auto grid grid-cols-3 h-screen ">
      <Sidebar
        onClick={handleAddProject}
        projects={projects}
        onProjectSelect={handleSelectedProject}
        selectedProject={currentProject}
      />

      <div className="col-span-2  flex items-center">{displayContent}</div>
    </div>
  );
}

export default App;
