import React from 'react'
import Card from './Card'

function TaskContainer({type,name,taskId,taskItem, onTaskClick, deleteTask,handleDrop,handleDragOver,handleDragStart}) {

  return (
    <div className="task-container bg-gradient mx-4 rounded " onDrop={(e)=>handleDrop(e,type)} onDragOver={(e)=>handleDragOver(e)} >
        <div className="text-center">
        <h3 className='pt-2'>{name}</h3>
        </div>
        {taskItem.map((taskItem, index) => (
          <Card 
          taskId={taskId}
          key={index} 
          taskItem={taskItem}
          onClick={()=>onTaskClick(taskItem,type)} 
          deleteOnClick={()=> deleteTask(taskItem,type)}
          handleDragStart={handleDragStart}/>
        ))}
      
    </div>
  )
}


export default TaskContainer
