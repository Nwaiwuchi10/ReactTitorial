import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react'
import Headers from './component/Header';
import button from './component/button';
import Tasks from "./component/task";
import AddTask from './component/AddTask';
import Footer from './component/Footer';
import About from './component/About';
import Pix from './Pix';


const App = () => {
  const [showAddTask, setShowAddTask] =useState 
  (false)
  const [tasks, setTasks] =useState([
    {
    id: 1,
    text: 'Doctors Appoinment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
  },
]
)
// Add Task 
const addTask = (task) =>{
  console.log("add task");
  const id = Math.floor(Math.random() * 
  1000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks,newTask])
}
// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=>task.id !==id ))
}
// Toggle Reminder 
const toggleReminder =(id) => {
  setTasks (tasks.map((task)=>task.id===id ? {...task, reminder: !task.reminder} : 
  task))
}
  return (
    <Router>
    <div className ='container'>
      <Headers onAdd={() =>setShowAddTask
        (!showAddTask) } 
        showAdd={showAddTask} />

        <button  />
        <Route path ='/'
        exact
        render = {(props) => (
          <>
         {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length> 0 ? (
      <Tasks tasks={tasks}  onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
    'No Tasks To Show'
    
      )}
    
    <About/>
    <Footer/>

<Pix />
          </>
        )
        } />

      
      
      
     
     

      </div>
      </Router>
    
  )
}

export default App;
