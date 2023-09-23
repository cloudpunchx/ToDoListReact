import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <div className="header">
        <TaskInput onAddTask={handleAddTask} />
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
