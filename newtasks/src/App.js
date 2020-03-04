import React, {useState, useEffect} from 'react';
import './App.css';

const App =() => {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState('');
  const [completed] = useState(false);
}

const addTasks = (e) => {
  e.preventDefault();
  setTasks([
    ...tasks,
    {description, completed}
  ])
  setDescription('')
}

const removeTask = (description) => {
  setTasks(tasks.filter((task) => task.description !== description))
}

useEffect(() => {
  const tasksData = JSON.parse(localStorage.getItem('tasks'));
  if (tasksData) {
    setTasks(tasksData)
  }
}, [])

useEffect(() => {
  const tasksData = localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

return (
  <div>
    <h1>Tasks</h1>
    {tasks.map((task) => { 
      return (
        <div key={task.description}> //key- identify each task
          <h2>{task.description}</h2>
          <button onclick={() => removeTask(task.description)}></button>
        </div>
      )
    })}
      <p>Add Task</p>
      <form onSubmit={addTask}>
      <input value={description} onChange={(e) => setDescription(e.target.value)}/>
      <button>Add Task</button> 
      </form>
  </div>
)

export default App;  

