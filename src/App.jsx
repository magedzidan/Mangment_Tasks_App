import { useState } from "react";
import Task from "./Task";

function App() {
  const [newProject, SetNewProject] = useState([]);
  const [saveProject, setSaveProject] = useState(false);
  const [title, setTitle] = useState('');
  const [descrbtion, setDescrbtion] = useState('');
  const [date, setDate] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  function MakeNewProject() {
    setSaveProject(true);
  }

  function SaveProject() {
    SetNewProject((oldProjects) => [...oldProjects, { //by3lm 3l array kolha msh bylf 3leha ...oldproject==array msh element f el project
      title: title,
      description: descrbtion,
      dueDate: date
    }]);
    console.log(newProject);
    setSaveProject(false);
  }
  function DeleteProject(title) {
    SetNewProject((prevProjects) => 
      prevProjects.filter(project => project.title !== title)
    );
    setSelectedProject(null);
  }

  function CancelProject() {
    setSaveProject(false);
  }

  function handleProjectSelect(project) {
    setSelectedProject(project);
  }

  return (
    <>
      <div id="ProjectsBar" className="bg-amber-950">
        <h1 className="text-4xl font-bold">Your Projects</h1>
        <button className="bg-amber-900 hover:bg-amber-800" onClick={MakeNewProject}>+AddProject</button>
        <ol className="Projects">
          {newProject.map((project) => (
            <li className="" key={project.title}>
              <button onClick={() => handleProjectSelect(project)}>{project.title}</button>
            </li>
          ))}
        </ol>
      </div>
      {saveProject ? (
        <div className="newProject">
          <div className="flex flex-row gap-3 self-end">
            <button className="bg-transparent" onClick={CancelProject}>cancel</button>
            <button className="bg-amber-900 p-3 newBtn" onClick={SaveProject}>save</button>
          </div>
          
          <div className="input_area flex flex-col justify-start">
            <label>Title</label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            <label>Description</label>
            <input type="text" value={descrbtion} onChange={(event) => setDescrbtion(event.target.value)} />
            <label>Due Date</label>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </div>
        </div>
      ) : selectedProject ? (
        <Task {...selectedProject} deleteProj={DeleteProject} />
      ) : (
        <div id="emptyBody">
          <img src="src\assets\no-projects.png" width={80} height={90} alt='Large Pizza'/>
          <h1 className="text-4xl font-bold">No Project Selected</h1>
          <p className="text-base">Select a project or get started with a new one</p>
          <button className="bg-amber-900" onClick={MakeNewProject}>Create new project</button>
        </div>
      )}
    </>
  );
}

export default App;

