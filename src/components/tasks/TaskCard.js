import React from "react";


const TaskCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <ul>
          <li>{props.task.task}</li>
        </ul>
      </div>
    </div>
  );
}

export default TaskCard