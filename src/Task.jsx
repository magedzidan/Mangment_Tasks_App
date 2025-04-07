import { useState } from "react";

export default function Task({title, description, dueDate,deleteProj}) {
    const [tasks,setTasks]=useState([]);
    const [taskName,setTaskName]=useState('');
    function CreateTask(task){
      setTasks((prevTasks)=>[...prevTasks,
        task
      ])
    }
    return (
      <> 
      <div className="task-details">
        <header className="task-header">  
          <h1>{title}</h1> 
          <h2><button className="delete-btn" onClick={() => deleteProj(title)}>delete</button></h2> 
        </header>
    
        <p>Due Date: {dueDate}</p>
        <p className="task-description">{description}</p>
        <hr className="task-divider"/>
        
        <div className="task-creation">
          <h1>Tasks</h1>
          <div className="task-input-group">
            <input 
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)} 
              className="task-input"
            />
            <p><button className="add-task-btn" onClick={() => CreateTask(taskName)}>add Task</button></p>
          </div>

          <div className="tasks-list">
            {/* <div className="task-item">
              <p>pracrice pracrice practice</p>
              <button className="clear-btn">clear</button>
            </div> */}

             {tasks.map((task)=>
             <div className="task-item">
              <p>{task}</p>
              <button className="clear-btn">clear</button>
            </div>)} 
          </div>
        </div>
      </div>
      </>
    );
  }