import "./App.css";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskContainer from "./components/TaskContainer";
import { useEffect, useState } from "react";
import UpdateTaskForm from "./components/UpdateTaskForm";
import DeleteModal from "./components/DeleteModal";
// import Card from "./components/Card";

function App() {

  const [taskItem , setTaskItem ] = useState({
    new:[],
    inProgress:[],
    completed:[]
  });

  const [taskIdCounter,setTaskIdCounter] = useState(1);

  // useEffect(()=>{
  //   const storeTasks = localStorage.getItem('tasks');
  //   if(storeTasks){
  //     setTaskItem([...taskItem, JSON.parse(storeTasks)]);
  //   }
  // },[]);


// const renderTask = (taskItem)=>{
//   localStorage.setItem('tasks', taskItem);

// }

  // JSON.parse(localStorage.getItem('key'));
  // localStorage.removeItem('key-name');
  

  ;
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [currentType, setCurrentType] = useState('');
  

 const addTask = ((newTaskItem,type)=>{
  
  setTaskItem(prevTasks => ({
    ...prevTasks,[type]:[...prevTasks[type],newTaskItem]
  }));
  setTaskIdCounter(prevId => prevId + 1);
  // renderTask(taskItem);
 });


const [draggedTask, setDraggedTask] = useState(null);

const handleDragStart = (e,task) => {
 
  setDraggedTask(task);
}

const handleDragOver = (e)=>{
  e.preventDefault();
}

const handleDrop = (e,type)=>{
  e.preventDefault();
  if(draggedTask && draggedTask.status !=='completed'){
    //remove from current status
    setTaskItem((prevTasks)=>{
      const currentType = draggedTask.status;
      const updatedTask = {
        ...prevTasks, [currentType]: prevTasks[currentType].filter((item)=> item!==draggedTask),
        [type]: [...prevTasks[type], {...draggedTask, status:type}],
      };
      return updatedTask;
    });
    setDraggedTask(null);
  }
};

// it will handle the task that is being clicked
 const handleTaskClick = (taskItem, type) =>{
  setCurrentTask(taskItem);
  setCurrentType(type);

  console.log(taskItem);
  console.log(type);

}


const updateTask = (updatedTask,type) =>{
  
  setTaskItem(prevTasks =>({
    ...prevTasks,[type]:[...prevTasks[type] ,updatedTask] 
  }));
//  prevTasks[currentType].map(taskItem => taskItem === currentTask ? updatedTask :taskItem)
  deleteTask(currentTask,currentType);

}

const deleteTask = () =>{

  console.log("confirm delete");
    setTaskItem(prevTasks =>({
      ...prevTasks,[currentType]: prevTasks[currentType].filter((task)=> task!==currentTask),
    }));

};
  
  return (
   
    <div className="">
      <Navbar/>
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-4 p-4">
        <div className="col">
          <TaskContainer 
          type="new" 
          name="New"
          taskId={taskIdCounter}
          taskItem={taskItem.new}
          onTaskClick={handleTaskClick} 
          deleteTask={deleteTask}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          handleDragStart={handleDragStart}
          />
        </div>
        <div className="col">
        <TaskContainer 
        type="inProgress" 
        name="In progress"
        taskId={taskIdCounter}
        taskItem={taskItem.inProgress} 
        onTaskClick={handleTaskClick}
        deleteTask={deleteTask}
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
        handleDragStart={handleDragStart}
        />
        </div>
        <div className="col">
        <TaskContainer 
        type="completed" 
        name="Completed"
        taskId={taskIdCounter}
        taskItem={taskItem.completed}
        onTaskClick={handleTaskClick}
        deleteTask={deleteTask}
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
        handleDragStart={handleDragStart}
        />
        </div>
      </div>
      <UpdateTaskForm task={currentTask} updateTask={updateTask} />
      <TaskForm addTask={addTask}/> 
      <DeleteModal confirmDelete={deleteTask} />
    </div>
  )
}

export default App;
