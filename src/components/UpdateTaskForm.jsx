import React, { useEffect, useState } from 'react'
import TaskContainer from './TaskContainer';

function UpdateTaskForm({ task ,updateTask}) {

    const [isCompleted, setIsCompleted] = useState(false);
    const [title, setTitle] = useState(task?.title || 'new task');
    const [description, setDescription] = useState(task?.description ||'');
    const [priority, setPriority] = useState(task?.priority || 'normal');
    const [status, setStatus] = useState(task?.status || 'new');
    const [creationDate, setCreationDate] = useState(task?.creationDate || '');
    const [completionDate,setCompletionDate] = useState(task?.completionDate || '');

    useEffect(()=>{
      let newDate = new Date();
      newDate = newDate.toISOString().split('T')[0];
      if(task){
        setTitle(task.title);
        setDescription(task.description);
        setPriority(task.priority);
        setStatus(task.status);
        setCreationDate(task.creationDate);
        setCompletionDate(newDate);
       const radio= document.querySelectorAll('input[name="priority"]');
       radio.forEach(element =>  {
          if(element.value===task.priority) 
            element.checked=true;
       });
       if(task.status==='completed'){
        setIsCompleted(true);
       }
       else{
        setIsCompleted(false);
       }
      }
    }, [task]);
    
    
    const getPriority = () => {
      setPriority(document.querySelector('input[name="priority"]:checked').value);
      
    }
  

    const handleUpdate = (e) => {
        e.preventDefault();
        if(status==='completed'){
          updateTask({title:title,description:description,priority:priority,status:status,creationDate:creationDate, completionDate:completionDate},status,priority)
        }
        else{
          updateTask({ title:title,description:description,priority:priority,status:status,creationDate:creationDate},status,priority);
        } 
    }


  return (
    <div className="modal fade" id="taskDetailUpdate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content" >
        <div className="modal-header">
          <h1 className="modal-title fs-5 modal-heading" id="exampleModalLabel">Update Task</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <form>
          <div className="row mb-3">
              <label htmlFor="taskTitle" className="col-sm-3 col-Form-label">Title</label>
              <div className="col-sm-9">
              <input type="text" className="form-control" value={title} id="taskTitle" title="task title" onChange={(e) => setTitle(e.target.value)} disabled={isCompleted === true ? true : false} required/>
              </div>
          </div>
          <div className="row mb-3">
              <label htmlFor="taskDescription" className="col-sm-3 col-Form-label">Description</label>
              <div className="col-sm-9">
              <input type="text" className="form-control" value={description} id="taskDescription" description="task description" onChange={(e) => setDescription(e.target.value)} disabled={isCompleted === true ? true : false}/>
              </div>
          </div>
          <div className='row mb-3 g-0'>
            <label className='form-label col-sm-3' htmlFor="startDate">Creation Date</label>
            <input id="startDate" className="form-control col-sm-9 w-75" type="date" value={creationDate} onChange={(e) => setCreationDate(e.target.value)} disabled />
          </div>
          {
            isCompleted && 
            <div className='row mb-3 g-0'>
            <label className='form-label col-sm-3' htmlFor="startDate">Completion Date</label>
            <input id="endDate" className="form-control col-sm-9 w-75" type="date" value={completionDate} onChange={(e) => setCompletionDate(e.target.value)} disabled />
            </div>
          }
          
          <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-3 pt-0">Priority</legend>
            <div className="col-sm-9">
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="priority" id="highPriority" value="High" onChange={getPriority} disabled={isCompleted === true ? true : false}/>
                  <label className="form-check-label" htmlFor="gridRadios1" >
                  High
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="priority" id="normalPriority" value="Normal" onChange={getPriority} disabled={isCompleted === true ? true : false}/>
                  <label className="form-check-label" htmlFor="gridRadios2">
                  Normal
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="priority" id="lowPriority" value="Low" onChange={getPriority} disabled={isCompleted === true ? true : false}/>
                  <label className="form-check-label" htmlFor="gridRadios3">
                  Low
                  </label>
              </div>
           </div>
          </fieldset>
          <div className='row mb-3'>
              <label htmlFor='taskStatus' className='col-Form-label col-sm-3  pt-0' >Status</label>
              <div className='col-sm-9'>
              <select className='form-select' value={status} onChange={(e) => setStatus(e.target.value)} disabled={isCompleted} required>
                  <option value=''>Select one</option>
                  <option value="new">New</option>
                  <option value="inProgress">In Progress</option>
                  <option value="completed">Completed </option>
              </select>
              </div>
          </div>
      </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={handleUpdate} data-bs-dismiss="modal" disabled={isCompleted === true ? true : false}>Save</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateTaskForm;
