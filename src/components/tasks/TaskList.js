import React, { useState, useEffect } from 'react';
//import the components we will need
import TaskCard from './TaskCard';
import TasksManager from '../../modules/TasksManager';

const TaskList = props => {
  // The initial state is an empty array
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    // After the data comes back from the API, we
    //  use the setNews function to update state
    return TasksManager.getAll().then(tasksFromAPI => {
      setTasks(tasksFromAPI);
    })
  };
  
  // got the news from the API on the component's first render
  useEffect(() => {
    getTasks();
  }, []);
  
  // Finally we use map() to "loop over" the news array to show a list of news cards
  
    return (
    <>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => {props.history.push("/newTask")}}>
        Add New Task
        </button>
      </section>
      <div className="container-cards">
        <h1>Tasks</h1>
        {tasks.map(task => {
        if (sessionStorage.activeUser == task.userId) {
        return <TaskCard key={task.id} task={task} />
        } 
        }
        )}
      </div>
    </>
  );    
}


export default TaskList

