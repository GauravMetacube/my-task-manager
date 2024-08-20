import React from 'react'

import UpdateTaskForm from './UpdateTaskForm'

function Card( {taskId, taskItem , onClick, deleteOnClick,handleDragStart}) {

  let bgColor="";
  let buttonColor="";
    switch(taskItem.priority){
      
      case 'High': bgColor='bg-danger';
                    buttonColor='white';
            break;
      case 'Normal' :  bgColor='bg-warning';
                  buttonColor='white';
            break;
      case 'Low' :  bgColor='bg-info';
                  buttonColor='white';
            break;
      default :  bgColor='bg-success';
    }
    

  return (
    <div className={`card d-flex flex-row ${bgColor}  bg-gradient`} onClick={onClick} draggable={taskItem.status!=='completed'} id={`task${taskId}`} onDragStart={(e)=>handleDragStart(e,taskItem)}> 
        <div className={`card-body`} data-bs-toggle="modal" data-bs-target="#taskDetailUpdate" >
            <h5 className="card-title">{taskItem.title}</h5>
            <p className="card-text mb-1">{taskItem.description}</p>
            <pre className='mb-1'>{`creation date : ${taskItem.creationDate}`}</pre>  
        </div>
        <div>
          <i className={`bi bi-trash position-relative`} style={{color: buttonColor, fontSize:"3rem", zIndex:"1" , top:"20px"}}
         data-bs-toggle="modal" data-bs-target="#deleteModal" ></i>
        {/* <button className='close' onClick={deleteOnClick}></button> */}
        </div>
    </div>
    
  )
}

export default Card
