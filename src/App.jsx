import { useState } from "react";

function App() {
  const [newProject,setNewProject]=useState(false);
  function MakeNewProject(){
    setNewProject(true);
  }

  function SaveProject(){
    setNewProject(false);
  }

  function CancelProject(){
    setNewProject(false);
  }
  return (
    <>
    <div id="ProjectsBar" className="bg-amber-950">
    <h1 className="text-4xl font-bold">Your Projects</h1>
    <button className="bg-amber-900" onClick={MakeNewProject} >+AddProject</button>
    </div>
    {newProject?<div className="newProject">

      <div className="flex flex-row gap-3 self-end">
      <button className="bg-transparent" onClick={CancelProject} >cancel</button>
      <button className="bg-amber-900 p-3 newBtn " onClick={SaveProject}>save</button>
      </div>
        
        <div className="input_area flex flex-col justify-start ">
        <label>Title</label>
        <input type="text"></input>
        <label>Descrbtion</label>
        <input type="text"></input>
        <label>Due Date</label>
        <input type="date"></input>
        </div>

    </div>
    :<div id="emptyBody">
      <img src="src\assets\no-projects.png" width={80} height={90} alt='Large Pizza'/>
      <h1 className="text-4xl font-bold">No Project Selected</h1>
      <p className="text-base">Select a project or get started with a new one</p>
      <button className="bg-amber-900" onClick={MakeNewProject}>Create new project</button>
    </div>}
   
      
    </>
  );
}

export default App;

