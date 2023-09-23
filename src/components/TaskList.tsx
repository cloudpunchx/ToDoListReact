import React from "react";

const TaskList: React.FC<{ tasks: string[] }> = ({ tasks }) => {
  return (
    <div className="toDoList">
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
