export default function Task({title, description, dueDate}) {
    return (
      <div className="task-details flex justify-center align-middle mx-auto my-auto flex-col text-center">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Due Date: {dueDate}</p>
      </div>
    );
  }