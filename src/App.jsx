function App() {
  return (
    <>
    <div id="ProjectsBar" className="bg-amber-950">
    <h1 className="text-4xl font-bold">Your Projects</h1>
    <button className="bg-amber-900" >+AddProject</button>
    </div>
    <div id="emptyBody">
      <img src="src\assets\no-projects.png" width={80} height={90} alt='Large Pizza'/>
      <h1 className="text-4xl font-bold">No Project Selected</h1>
      <p className="text-base ">Select a project or get started with a new one</p>
      <button className="bg-amber-900">Create new project</button>
    </div>
      
    </>
  );
}

export default App;

