import { useState } from "react";

const TaskInput: React.FC<{ onAddTask: (task: string) => void }> = ({
  onAddTask,
}) => {
  const [task, setTask] = useState<string>("");

  const handleAddTask = () => {
    onAddTask(task);
    setTask("");
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add A Task"
        aria-label="Task"
        aria-describedby="button-addon2"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
