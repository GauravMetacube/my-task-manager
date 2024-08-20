import React, { useState } from 'react'

function TaskForm({addTask}) {

    let newDate = new Date();
    newDate = newDate.toISOString().split('T')[0];
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('new');
    const [creationDate, setCreationDate] = useState(newDate);
    // const [CompletionDate, setCompletionDate] = useState(newDate);


    const addTaskDetail = (e) => {
        e.preventDefault();
        if(title===''){
          alert("please fill the required field");
         
        }else{
          console.log(priority);
          addTask({ title: title, description: description, priority:priority ,status:status, creationDate: creationDate},status,priority);
          
          //make the field empty
          setTitle('');
          setDescription('');
          setPriority('');
          setStatus('new')
          document.querySelector('input[name="addPriority"]:checked').checked=false;
        }
        
        
      };

      const getPriority = () => {
        setPriority(document.querySelector('input[name="addPriority"]:checked').value);
      }

  return (

<div className="modal fade" id="taskDetailModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content" >
      <div className="modal-header text-center">
        <h1 className="modal-title fs-5 modal-heading" id="exampleModalLabel">Create Task</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
        <div className="row mb-3">
            <label htmlFor="taskTitle" className="col-sm-3 col-form-label">Title</label>
            <div className="col-sm-9">
            <input type="text" className="form-control" value={title} id="taskTitle" title="task title" onChange={(e)=>setTitle(e.target.value)} required/>
            </div>
        </div>
        <div className="row mb-3">
            <label htmlFor="taskDescription" className="col-sm-3 col-form-label">Description</label>
            <div className="col-sm-9">
            <input type="text" className="form-control" value={description} id="taskDescription" description="task description" onChange={(e) => setDescription(e.target.value)} />
            </div>
        </div>
        <fieldset className="row mb-3">
            <legend className="col-form-label col-sm-3 pt-0">Priority</legend>
            <div className="col-sm-9">
            <div className="form-check">
                <input className="form-check-input" type="radio" name="addPriority" id="highPriority" value="High" onChange={getPriority}/>
                <label className="form-check-label" htmlFor="gridRadios1" >
                High
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="addPriority" id="normalPriority" value="Normal" onChange={getPriority}/>
                <label className="form-check-label" htmlFor="gridRadios2">
                Normal
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="addPriority" id="lowPriority" value="Low" onChange={getPriority}/>
                <label className="form-check-label" htmlFor="gridRadios3">
                Low
                </label>
            </div>
         </div>
        </fieldset>
        <div className='row mb-3 '>
            <label htmlFor='taskStatus' className='col-Form-label col-sm-3  pt-0' >Status</label>
            <div className='col-sm-9' >
            <select className='form-control' value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value=''>Select one</option>
                <option value="new">New</option>
                {/* <option value="inProgress">In Progress</option>
                <option value="completed">Completed </option> */}
            </select>
            </div>
        </div>
    </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={addTaskDetail} data-bs-dismiss="modal">Create task</button>
      </div>
    </div>
  </div>
</div>
    
  )
}

export default TaskForm;