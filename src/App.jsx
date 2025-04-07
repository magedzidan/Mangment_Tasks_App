import { useState } from "react";
import Task from "./Task";

function App() {
  const [newProject, SetNewProject] = useState([]);
  const [saveProject, setSaveProject] = useState(false);
  const [title, setTitle] = useState('');
  const [descrbtion, setDescrbtion] = useState('');
  const [date, setDate] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectTasks, setProjectTasks] = useState({}); // Store tasks for each project

  function MakeNewProject() {
    setSaveProject(true);
  }

  function SaveProject() {
    const newProjectId = Math.random().toString();
    SetNewProject((oldProjects) => [...oldProjects, {
      id: newProjectId,
      title: title,
      description: descrbtion,
      dueDate: date
    }]);
    setProjectTasks(prev => ({
      ...prev,
      [newProjectId]: [] // Initialize empty tasks array for new project
    }));
    setSaveProject(false);
  }

  function DeleteProject(id) {
    SetNewProject((prevProjects) => 
      prevProjects.filter(project => project.id !== id)
    );
    setProjectTasks(prev => {
      const newTasks = {...prev};
      delete newTasks[id];
      return newTasks;
    });
    setSelectedProject(null);
  }

  function CancelProject() {
    setSaveProject(false);
  }

  function handleProjectSelect(project) {
    setSelectedProject(project);
  }

  function addTask(projectId, taskText) {
    setProjectTasks(prev => ({
      ...prev,
      [projectId]: [...(prev[projectId] || []), {
        id: Math.random().toString(),
        text: taskText
      }]
    }));
  }

  function deleteTask(projectId, taskId) {
    setProjectTasks(prev => ({
      ...prev,
      [projectId]: prev[projectId].filter(task => task.id !== taskId)
    }));
  }

  return (
    <>
      <div id="ProjectsBar" className="bg-amber-950">
        <h1 className="text-4xl font-bold">Your Projects</h1>
        <button className="bg-amber-900 hover:bg-amber-800" onClick={MakeNewProject}>+AddProject</button>
        <ol className="Projects">
          {newProject.map((project) => (
            <li className="" key={project.id}>
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
        <Task 
          {...selectedProject} 
          deleteProj={DeleteProject}
          tasks={projectTasks[selectedProject.id] || []}
          onAddTask={addTask}
          onDeleteTask={deleteTask}
        />
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

