import React, { useState } from 'react';
import TasksManager from '../../modules/TasksManager';

const TaskForm = props => {
  const [tasks, setTasks] = useState({ task: "", userId: sessionStorage.activeUser });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...tasks };
    stateToChange[evt.target.id] = evt.target.value;
    setTasks(stateToChange);
  };

  const constructNewTask = evt => {
    evt.preventDefault();
    if (tasks.task === "") {
      window.alert("Please input task");
    } else {
      setIsLoading(true);
      TasksManager.post(tasks)
        .then(() => props.history.push("/tasks"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="task">Task</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="task"
              placeholder="Task"
            />
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewTask}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default TaskForm