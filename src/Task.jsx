import { useState } from "react";

export default function Task({id, title, description, dueDate, deleteProj, tasks, onAddTask, onDeleteTask}) {
    const [taskName, setTaskName] = useState('');

    function handleAddTask() {
      if (taskName.trim()) {
        onAddTask(id, taskName);
        setTaskName('');
      }
    }

    return (
      <> 
      <div className="task-details">
        <header className="task-header">  
          <h1>{title}</h1> 
          <h2><button className="delete-btn" onClick={() => deleteProj(id)}>delete</button></h2> 
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
            <p><button className="add-task-btn" onClick={handleAddTask}>add Task</button></p>
          </div>

          <div className="tasks-list">
            {tasks.map((task) => (
              <div className="task-item" key={task.id}>
                <p>{task.text}</p>
                <button className="clear-btn" onClick={() => onDeleteTask(id, task.id)}>clear</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
    );
  }